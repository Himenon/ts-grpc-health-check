import { status as GrpcStatus } from "@grpc/grpc-js";

import { GrpcError } from "./GrpcError.js";
import * as health_grpc_pb from "./v1/health_grpc_pb.js";
import * as health_pb from "./v1/health_pb.js";

export type StatusMap = Record<string, number | undefined>;

export type Option = {
  checkHooks?: () => void;
  watchHooks?: () => void;
};

const createHealthServerImpl = (statusMap: StatusMap = {}, option?: Option): health_grpc_pb.IHealthServer => {
  const watchErrorMap: Record<string, Error> = {};
  const watchStatusMap: Record<string, health_pb.HealthCheckResponse.ServingStatus> = {};
  const server: health_grpc_pb.IHealthServer = {
    check: (call, callback) => {
      option?.checkHooks?.();
      const service: string = call.request.getService();
      const status = statusMap[service];

      const res = new health_pb.HealthCheckResponse();
      if (!status) {
        const error = new GrpcError("unknown service.", {
          code: GrpcStatus.NOT_FOUND,
        });
        callback(error, undefined);
      } else {
        res.setStatus(status);
        callback(null, res);
      }
    },
    watch: call => {
      option?.watchHooks?.();
      const service: string = call.request.getService();
      const interval = setInterval(() => {
        // Updated status is used for getting service status updates.
        let servingStatus: health_pb.HealthCheckResponse.ServingStatus = health_pb.HealthCheckResponse.ServingStatus.SERVING;
        const res = new health_pb.HealthCheckResponse();
        if (!statusMap[service]) {
          // Set the initial status
          servingStatus = health_pb.HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
          statusMap[service] = servingStatus;
          res.setStatus(servingStatus);
          call.write(res);
        }
        // Add to the watch status map
        watchStatusMap[service] = servingStatus;
        if (!watchErrorMap[service]) {
          const lastSentStatus = statusMap[service] || -1;
          if (lastSentStatus !== servingStatus) {
            // Status has changed
            statusMap[service] = servingStatus;
            res.setStatus(servingStatus);
            call.write(res, (error?: Error) => {
              if (error) {
                // Terminate stream on next tick
                watchErrorMap[service] = error;
              }
            });
          }
        } else {
          clearInterval(interval);
          // Terminate the stream
          const grpcError = new GrpcError("Stream has ended.", {
            code: GrpcStatus.CANCELLED,
          });
          call.emit("error", grpcError);
          call.end();
        }
      }, 1000);
    },
  };

  return server;
};

export default {
  createHealthServerImpl,
  service: health_grpc_pb.HealthService,
  Client: health_grpc_pb.HealthClient,
  messages: health_pb,
};
