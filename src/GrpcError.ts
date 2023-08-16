import { Metadata, ServerErrorResponse, status as GrpcStatus } from "@grpc/grpc-js";

export type Options = {
  /** code - the gRPC status code. */
  code?: number;
  /** additional error information. */
  metadata?: Metadata;
  /** message - the error message. */
  message?: string | Error;
  /** details - the error details. */
  details?: string;
};

export class GrpcError implements ServerErrorResponse {
  public code?: GrpcStatus | undefined;
  public details?: string | undefined;
  public metadata?: Metadata | undefined;
  public name = "Error";
  public stack?: string | undefined;
  constructor(
    public message: string,
    options?: Partial<Options>,
  ) {
    this.code = options?.code;
    this.details = options?.details;
    this.metadata = options?.metadata;
  }
}
