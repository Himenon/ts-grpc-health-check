#! /bin/bash

# protos/helloworld.proto
PROTO_SRC=protos
PROTO_DEST=src/protos

rm -rf $PROTO_DEST

mkdir -p $PROTO_DEST

pnpm grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:$PROTO_DEST \
  --ts_out=grpc_js:${PROTO_DEST} \
  --grpc_out=grpc_js:$PROTO_DEST \
  --plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I $PROTO_SRC \
  $PROTO_SRC/*.proto
