"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/v1/health_pb.js
var require_health_pb = __commonJS({
  "src/v1/health_pb.js"(exports2) {
    "use strict";
    var jspb = require("google-protobuf");
    var goog = jspb;
    var global = function() {
      if (this) {
        return this;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      return Function("return this")();
    }.call(null);
    goog.exportSymbol("proto.grpc.health.v1.HealthCheckRequest", null, global);
    goog.exportSymbol("proto.grpc.health.v1.HealthCheckResponse", null, global);
    goog.exportSymbol("proto.grpc.health.v1.HealthCheckResponse.ServingStatus", null, global);
    proto.grpc.health.v1.HealthCheckRequest = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.health.v1.HealthCheckRequest, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.health.v1.HealthCheckRequest.displayName = "proto.grpc.health.v1.HealthCheckRequest";
    }
    proto.grpc.health.v1.HealthCheckResponse = function(opt_data) {
      jspb.Message.initialize(this, opt_data, 0, -1, null, null);
    };
    goog.inherits(proto.grpc.health.v1.HealthCheckResponse, jspb.Message);
    if (goog.DEBUG && !COMPILED) {
      proto.grpc.health.v1.HealthCheckResponse.displayName = "proto.grpc.health.v1.HealthCheckResponse";
    }
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.health.v1.HealthCheckRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.health.v1.HealthCheckRequest.toObject(opt_includeInstance, this);
      };
      proto.grpc.health.v1.HealthCheckRequest.toObject = (includeInstance, msg) => {
        var f, obj = {
          service: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.health.v1.HealthCheckRequest.deserializeBinary = (bytes) => {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.health.v1.HealthCheckRequest();
      return proto.grpc.health.v1.HealthCheckRequest.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.health.v1.HealthCheckRequest.deserializeBinaryFromReader = (msg, reader) => {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {string} */
              reader.readString()
            );
            msg.setService(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.health.v1.HealthCheckRequest.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.health.v1.HealthCheckRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.health.v1.HealthCheckRequest.serializeBinaryToWriter = (message, writer) => {
      var f = void 0;
      f = message.getService();
      if (f.length > 0) {
        writer.writeString(1, f);
      }
    };
    proto.grpc.health.v1.HealthCheckRequest.prototype.getService = function() {
      return (
        /** @type {string} */
        jspb.Message.getFieldWithDefault(this, 1, "")
      );
    };
    proto.grpc.health.v1.HealthCheckRequest.prototype.setService = function(value) {
      return jspb.Message.setProto3StringField(this, 1, value);
    };
    if (jspb.Message.GENERATE_TO_OBJECT) {
      proto.grpc.health.v1.HealthCheckResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.grpc.health.v1.HealthCheckResponse.toObject(opt_includeInstance, this);
      };
      proto.grpc.health.v1.HealthCheckResponse.toObject = (includeInstance, msg) => {
        var f, obj = {
          status: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
          obj.$jspbMessageInstance = msg;
        }
        return obj;
      };
    }
    proto.grpc.health.v1.HealthCheckResponse.deserializeBinary = (bytes) => {
      var reader = new jspb.BinaryReader(bytes);
      var msg = new proto.grpc.health.v1.HealthCheckResponse();
      return proto.grpc.health.v1.HealthCheckResponse.deserializeBinaryFromReader(msg, reader);
    };
    proto.grpc.health.v1.HealthCheckResponse.deserializeBinaryFromReader = (msg, reader) => {
      while (reader.nextField()) {
        if (reader.isEndGroup()) {
          break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
          case 1:
            var value = (
              /** @type {!proto.grpc.health.v1.HealthCheckResponse.ServingStatus} */
              reader.readEnum()
            );
            msg.setStatus(value);
            break;
          default:
            reader.skipField();
            break;
        }
      }
      return msg;
    };
    proto.grpc.health.v1.HealthCheckResponse.prototype.serializeBinary = function() {
      var writer = new jspb.BinaryWriter();
      proto.grpc.health.v1.HealthCheckResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    };
    proto.grpc.health.v1.HealthCheckResponse.serializeBinaryToWriter = (message, writer) => {
      var f = void 0;
      f = message.getStatus();
      if (f !== 0) {
        writer.writeEnum(1, f);
      }
    };
    proto.grpc.health.v1.HealthCheckResponse.ServingStatus = {
      UNKNOWN: 0,
      SERVING: 1,
      NOT_SERVING: 2,
      SERVICE_UNKNOWN: 3
    };
    proto.grpc.health.v1.HealthCheckResponse.prototype.getStatus = function() {
      return (
        /** @type {!proto.grpc.health.v1.HealthCheckResponse.ServingStatus} */
        jspb.Message.getFieldWithDefault(this, 1, 0)
      );
    };
    proto.grpc.health.v1.HealthCheckResponse.prototype.setStatus = function(value) {
      return jspb.Message.setProto3EnumField(this, 1, value);
    };
    goog.object.extend(exports2, proto.grpc.health.v1);
  }
});

// src/v1/health_grpc_pb.js
var require_health_grpc_pb = __commonJS({
  "src/v1/health_grpc_pb.js"(exports2) {
    "use strict";
    var grpc = require("@grpc/grpc-js");
    var health_pb2 = require_health_pb();
    function serialize_grpc_health_v1_HealthCheckRequest(arg) {
      if (!(arg instanceof health_pb2.HealthCheckRequest)) {
        throw new Error("Expected argument of type grpc.health.v1.HealthCheckRequest");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_grpc_health_v1_HealthCheckRequest(buffer_arg) {
      return health_pb2.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
    }
    function serialize_grpc_health_v1_HealthCheckResponse(arg) {
      if (!(arg instanceof health_pb2.HealthCheckResponse)) {
        throw new Error("Expected argument of type grpc.health.v1.HealthCheckResponse");
      }
      return Buffer.from(arg.serializeBinary());
    }
    function deserialize_grpc_health_v1_HealthCheckResponse(buffer_arg) {
      return health_pb2.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
    }
    var HealthService2 = exports2.HealthService = {
      // If the requested service is unknown, the call will fail with status
      // NOT_FOUND.
      check: {
        path: "/grpc.health.v1.Health/Check",
        requestStream: false,
        responseStream: false,
        requestType: health_pb2.HealthCheckRequest,
        responseType: health_pb2.HealthCheckResponse,
        requestSerialize: serialize_grpc_health_v1_HealthCheckRequest,
        requestDeserialize: deserialize_grpc_health_v1_HealthCheckRequest,
        responseSerialize: serialize_grpc_health_v1_HealthCheckResponse,
        responseDeserialize: deserialize_grpc_health_v1_HealthCheckResponse
      },
      // Performs a watch for the serving status of the requested service.
      // The server will immediately send back a message indicating the current
      // serving status.  It will then subsequently send a new message whenever
      // the service's serving status changes.
      //
      // If the requested service is unknown when the call is received, the
      // server will send a message setting the serving status to
      // SERVICE_UNKNOWN but will *not* terminate the call.  If at some
      // future point, the serving status of the service becomes known, the
      // server will send a new message with the service's serving status.
      //
      // If the call terminates with status UNIMPLEMENTED, then clients
      // should assume this method is not supported and should not retry the
      // call.  If the call terminates with any other status (including OK),
      // clients should retry the call with appropriate exponential backoff.
      watch: {
        path: "/grpc.health.v1.Health/Watch",
        requestStream: false,
        responseStream: true,
        requestType: health_pb2.HealthCheckRequest,
        responseType: health_pb2.HealthCheckResponse,
        requestSerialize: serialize_grpc_health_v1_HealthCheckRequest,
        requestDeserialize: deserialize_grpc_health_v1_HealthCheckRequest,
        responseSerialize: serialize_grpc_health_v1_HealthCheckResponse,
        responseDeserialize: deserialize_grpc_health_v1_HealthCheckResponse
      }
    };
    exports2.HealthClient = grpc.makeGenericClientConstructor(HealthService2);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  health_grpc_pb: () => health_grpc_pb,
  health_pb: () => health_pb
});
module.exports = __toCommonJS(src_exports);
var import_grpc_js = require("@grpc/grpc-js");

// src/GrpcError.ts
var GrpcError = class {
  constructor(message, options) {
    this.message = message;
    this.code = options?.code;
    this.details = options?.details;
    this.metadata = options?.metadata;
  }
  code;
  details;
  metadata;
  name = "Error";
  stack;
};

// src/index.ts
var health_grpc_pb = __toESM(require_health_grpc_pb());
var health_pb = __toESM(require_health_pb());
var defaultStatusMap = {
  "": health_pb.HealthCheckResponse.ServingStatus.SERVING
};
var createHealthServerImpl = (statusMap = defaultStatusMap, option) => {
  const watchErrorMap = {};
  const watchStatusMap = {};
  const server = {
    check: (call, callback) => {
      option?.checkHooks?.(call.request);
      const service = call.request.getService();
      const status = statusMap[service];
      const res = new health_pb.HealthCheckResponse();
      if (!status) {
        const error = new GrpcError("unknown service.", {
          code: import_grpc_js.status.NOT_FOUND
        });
        callback(error, void 0);
      } else {
        res.setStatus(status);
        callback(null, res);
      }
    },
    watch: (call) => {
      option?.watchHooks?.(call.request);
      const service = call.request.getService();
      const interval = setInterval(() => {
        let servingStatus = health_pb.HealthCheckResponse.ServingStatus.SERVING;
        const res = new health_pb.HealthCheckResponse();
        if (!statusMap[service]) {
          servingStatus = health_pb.HealthCheckResponse.ServingStatus.SERVICE_UNKNOWN;
          statusMap[service] = servingStatus;
          res.setStatus(servingStatus);
          call.write(res);
        }
        watchStatusMap[service] = servingStatus;
        if (!watchErrorMap[service]) {
          const lastSentStatus = statusMap[service] || -1;
          if (lastSentStatus !== servingStatus) {
            statusMap[service] = servingStatus;
            res.setStatus(servingStatus);
            call.write(res, (error) => {
              if (error) {
                watchErrorMap[service] = error;
              }
            });
          }
        } else {
          clearInterval(interval);
          const grpcError = new GrpcError("Stream has ended.", {
            code: import_grpc_js.status.CANCELLED
          });
          call.emit("error", grpcError);
          call.end();
        }
      }, 1e3);
    }
  };
  return server;
};
var src_default = {
  createHealthServerImpl,
  service: health_grpc_pb.HealthService,
  Client: health_grpc_pb.HealthClient
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  health_grpc_pb,
  health_pb
});
//# sourceMappingURL=index.js.map