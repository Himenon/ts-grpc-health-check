# @himenon/template-esm-js

## Usage

```bash
npm i @himenon/ts-grpc-health-check
# or
pnpm i @himenon/ts-grpc-health-check
```

```ts
import health from "@himenon/ts-grpc-health-check";

const statusMap = {
  ServiceFoo: proto.grpc.health.v1.HealthCheckResponse.ServingStatus.SERVING,
  ServiceBar: proto.grpc.health.v1.HealthCheckResponse.ServingStatus.NOT_SERVING,
  "": proto.grpc.health.v1.HealthCheckResponse.ServingStatus.NOT_SERVING,
};

const healthImpl = health.createHealthServerImpl(statusMap);

// Add the service and implementation to your pre-existing gRPC-node server
server.addService(health.service, healthImpl);
```

- [grpc/grpc-node - grpc-health-check](https://github.com/grpc/grpc-node/tree/v1.12.4/packages/grpc-health-check)

## Development

```bash
pnpm i
# For Apple Silicon
npm_config_target_arch=x64 npm_config_arch=x64 pnpm i
```

## Release

- Automatic version updates are performed when merged into the `main` branch.

## LICENCE

[@Himenon/template-esm-js](https://github.com/Himenon/template-esm-js)・MIT
