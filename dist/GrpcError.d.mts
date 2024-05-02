import { Metadata, ServerErrorResponse, status } from '@grpc/grpc-js';

type Options = {
    /** code - the gRPC status code. */
    code?: number;
    /** additional error information. */
    metadata?: Metadata;
    /** message - the error message. */
    message?: string | Error;
    /** details - the error details. */
    details?: string;
};
declare class GrpcError implements ServerErrorResponse {
    message: string;
    code?: status | undefined;
    details?: string | undefined;
    metadata?: Metadata | undefined;
    name: string;
    stack?: string | undefined;
    constructor(message: string, options?: Partial<Options>);
}

export { GrpcError, type Options };
