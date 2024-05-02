"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/GrpcError.ts
var GrpcError_exports = {};
__export(GrpcError_exports, {
  GrpcError: () => GrpcError
});
module.exports = __toCommonJS(GrpcError_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GrpcError
});
//# sourceMappingURL=GrpcError.js.map