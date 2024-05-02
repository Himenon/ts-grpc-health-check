import * as grpc from '@grpc/grpc-js';
import * as jspb from 'google-protobuf';

// package: grpc.health.v1
// file: health.proto



declare class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

declare namespace HealthCheckRequest {
  export type AsObject = {
    service: string;
  };
}

declare class HealthCheckResponse extends jspb.Message {
  getStatus(): HealthCheckResponse.ServingStatus;
  setStatus(value: HealthCheckResponse.ServingStatus): HealthCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

declare namespace HealthCheckResponse {
  export type AsObject = {
    status: HealthCheckResponse.ServingStatus;
  };

  export enum ServingStatus {
    UNKNOWN = 0,
    SERVING = 1,
    NOT_SERVING = 2,
    SERVICE_UNKNOWN = 3,
  }
}

declare const health_pb_d_HealthCheckRequest: typeof HealthCheckRequest;
declare const health_pb_d_HealthCheckResponse: typeof HealthCheckResponse;
declare namespace health_pb_d {
  export { health_pb_d_HealthCheckRequest as HealthCheckRequest, health_pb_d_HealthCheckResponse as HealthCheckResponse };
}

// package: grpc.health.v1
// file: health.proto



interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  check: IHealthService_ICheck;
  watch: IHealthService_IWatch;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<HealthCheckRequest, HealthCheckResponse> {
  path: "/grpc.health.v1.Health/Check";
  requestStream: false;
  responseStream: false;
  requestSerialize: grpc.serialize<HealthCheckRequest>;
  requestDeserialize: grpc.deserialize<HealthCheckRequest>;
  responseSerialize: grpc.serialize<HealthCheckResponse>;
  responseDeserialize: grpc.deserialize<HealthCheckResponse>;
}
interface IHealthService_IWatch extends grpc.MethodDefinition<HealthCheckRequest, HealthCheckResponse> {
  path: "/grpc.health.v1.Health/Watch";
  requestStream: false;
  responseStream: true;
  requestSerialize: grpc.serialize<HealthCheckRequest>;
  requestDeserialize: grpc.deserialize<HealthCheckRequest>;
  responseSerialize: grpc.serialize<HealthCheckResponse>;
  responseDeserialize: grpc.deserialize<HealthCheckResponse>;
}

declare const HealthService: IHealthService;

interface IHealthServer extends grpc.UntypedServiceImplementation {
  check: grpc.handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
  watch: grpc.handleServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}

interface IHealthClient {
  check(
    request: HealthCheckRequest,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  check(
    request: HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  check(
    request: HealthCheckRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  watch(request: HealthCheckRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<HealthCheckResponse>;
  watch(
    request: HealthCheckRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<HealthCheckResponse>;
}

declare class HealthClient extends grpc.Client implements IHealthClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public check(
    request: HealthCheckRequest,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public check(
    request: HealthCheckRequest,
    metadata: grpc.Metadata,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public check(
    request: HealthCheckRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (error: grpc.ServiceError | null, response: HealthCheckResponse) => void,
  ): grpc.ClientUnaryCall;
  public watch(
    request: HealthCheckRequest,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<HealthCheckResponse>;
  public watch(
    request: HealthCheckRequest,
    metadata?: grpc.Metadata,
    options?: Partial<grpc.CallOptions>,
  ): grpc.ClientReadableStream<HealthCheckResponse>;
}

type health_grpc_pb_d_HealthClient = HealthClient;
declare const health_grpc_pb_d_HealthClient: typeof HealthClient;
declare const health_grpc_pb_d_HealthService: typeof HealthService;
type health_grpc_pb_d_IHealthClient = IHealthClient;
type health_grpc_pb_d_IHealthServer = IHealthServer;
declare namespace health_grpc_pb_d {
  export { health_grpc_pb_d_HealthClient as HealthClient, health_grpc_pb_d_HealthService as HealthService, type health_grpc_pb_d_IHealthClient as IHealthClient, type health_grpc_pb_d_IHealthServer as IHealthServer };
}

type StatusMap = Record<string, number | undefined>;

type Option = {
    checkHooks?: (req: HealthCheckRequest) => void;
    watchHooks?: (req: HealthCheckRequest) => void;
};
declare const _default: {
    createHealthServerImpl: (statusMap?: StatusMap, option?: Option | undefined) => IHealthServer;
    service: undefined;
    Client: typeof HealthClient;
};

export { type Option, type StatusMap, _default as default, health_grpc_pb_d as health_grpc_pb, health_pb_d as health_pb };
