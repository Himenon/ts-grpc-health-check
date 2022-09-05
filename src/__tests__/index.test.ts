import * as grpc from "@grpc/grpc-js";
import { afterEach, assert, beforeAll, describe, it, vi } from "vitest";

import health, { StatusMap } from "../index.js";
import * as health_grpc_pb from "../v1/health_grpc_pb";
import * as health_pb from "../v1/health_pb";

const ServingStatus = health_pb.HealthCheckResponse.ServingStatus;

describe.skip("Health Checking", () => {
  const statusMap: StatusMap = {
    "": ServingStatus.SERVING,
    "grpc.test.TestServiceNotServing": ServingStatus.NOT_SERVING,
    "grpc.test.TestServiceServing": ServingStatus.SERVING,
  };
  let healthServer: grpc.Server;
  let healthImpl: health_grpc_pb.IHealthServer;
  let healthClient: health_grpc_pb.HealthClient;
  beforeAll(async () => {
    vi.useFakeTimers();
    healthServer = new grpc.Server();
    healthImpl = health.createHealthServerImpl(statusMap);
    healthServer.addService(health.service, healthImpl);
    return new Promise<void>((resolve, reject) => {
      healthServer.bindAsync("0.0.0.0:3000", grpc.ServerCredentials.createInsecure(), (err, portNumber) => {
        if (err) {
          reject(err);
          return;
        }
        console.log({ portNumber });
        healthServer.start();
        healthClient = new health.Client("localhost:" + portNumber, grpc.credentials.createInsecure());
        resolve();
      });
    });
  });
  afterEach(() => {
    healthServer.forceShutdown();
    vi.useRealTimers();
  });
  it("should say an enabled service is SERVING", function () {
    const request = new health_pb.HealthCheckRequest();
    request.setService("");
    healthClient.check(request, (err, response) => {
      console.log("エラーなの？");
      assert.ifError(err);
      assert.strictEqual(response.getStatus(), ServingStatus.SERVING);
    });
  });
  it("should say that a disabled service is NOT_SERVING", function () {
    const request = new health_pb.HealthCheckRequest();
    request.setService("grpc.test.TestServiceNotServing");
    healthClient.check(request, function (err, response) {
      assert.ifError(err);
      assert.strictEqual(response.getStatus(), ServingStatus.NOT_SERVING);
    });
  });
  it("should say that an enabled service is SERVING", function (done) {
    const request = new health_pb.HealthCheckRequest();
    request.setService("grpc.test.TestServiceServing");
    healthClient.check(request, function (err, response) {
      assert.ifError(err);
      assert.strictEqual(response.getStatus(), ServingStatus.SERVING);
      done();
    });
  });
  it("should get NOT_FOUND if the service is not registered", async () => {
    const request = new health_pb.HealthCheckRequest();
    request.setService("not_registered");
    return new Promise<void>(resolve => {
      healthClient.check(request, function (err, _response) {
        assert(err);
        assert.strictEqual(err.code, grpc.status.NOT_FOUND);
        resolve();
      });
    });
  });
  it("should get a different response if the status changes", function () {
    const request = new health_pb.HealthCheckRequest();
    request.setService("transient");
    healthClient.check(request, function (err, _response) {
      assert(err);
      assert.strictEqual(err.code, grpc.status.NOT_FOUND);
      healthImpl.setStatus("transient", ServingStatus.SERVING);
      healthClient.check(request, function (err, response) {
        assert.ifError(err);
        assert.strictEqual(response.getStatus(), ServingStatus.SERVING);
      });
    });
  });
});
