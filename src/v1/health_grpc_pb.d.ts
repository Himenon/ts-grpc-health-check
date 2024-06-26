// package: grpc.health.v1
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import type * as health_pb from "./health_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  check: IHealthService_ICheck;
  watch: IHealthService_IWatch;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse> {
  path: "/grpc.health.v1.Health/Check";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<health_pb.HealthCheckRequest>;
  requestDeserialize: grpc.deserialize<health_pb.HealthCheckRequest>;
  responseSerialize: grpc.serialize<health_pb.HealthCheckResponse>;
  responseDeserialize: grpc.deserialize<health_pb.HealthCheckResponse>;
}
interface IHealthService_IWatch extends grpc.MethodDefinition<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse> {
  path: "/grpc.health.v1.Health/Watch";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<health_pb.HealthCheckRequest>;
  requestDeserialize: grpc.deserialize<health_pb.HealthCheckRequest>;
  responseSerialize: grpc.serialize<health_pb.HealthCheckResponse>;
  responseDeserialize: grpc.deserialize<health_pb.HealthCheckResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer extends grpc.UntypedServiceImplementation {
  check: grpc.handleUnaryCall<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
  watch: grpc.handleServerStreamingCall<health_pb.HealthCheckRequest, health_pb.HealthCheckResponse>;
}

export interface IHealthClient {
  check(
    request: health_pb.HealthCheckRequest,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  check(
    request: health_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  check(
    request: health_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  watch(request: health_pb.HealthCheckRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
  watch(
    request: health_pb.HealthCheckRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
}

export class HealthClient extends grpc.Client implements IHealthClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public check(
    request: health_pb.HealthCheckRequest,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public check(
    request: health_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public check(
    request: health_pb.HealthCheckRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: health_pb.HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public watch(
    request: health_pb.HealthCheckRequest,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
  public watch(
    request: health_pb.HealthCheckRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<health_pb.HealthCheckResponse>;
}
