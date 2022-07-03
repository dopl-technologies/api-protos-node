// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var catheter_path_service_pb = require('./catheter_path_service_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_dopltechnologies_protos_CreateCatheterPathRequest(arg) {
  if (!(arg instanceof catheter_path_service_pb.CreateCatheterPathRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateCatheterPathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateCatheterPathRequest(buffer_arg) {
  return catheter_path_service_pb.CreateCatheterPathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_CreateCatheterPathResponse(arg) {
  if (!(arg instanceof catheter_path_service_pb.CreateCatheterPathResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateCatheterPathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateCatheterPathResponse(buffer_arg) {
  return catheter_path_service_pb.CreateCatheterPathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetCatheterPathRequest(arg) {
  if (!(arg instanceof catheter_path_service_pb.GetCatheterPathRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetCatheterPathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetCatheterPathRequest(buffer_arg) {
  return catheter_path_service_pb.GetCatheterPathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetCatheterPathResponse(arg) {
  if (!(arg instanceof catheter_path_service_pb.GetCatheterPathResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetCatheterPathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetCatheterPathResponse(buffer_arg) {
  return catheter_path_service_pb.GetCatheterPathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetCoordinatesCatheterPathRequest(arg) {
  if (!(arg instanceof catheter_path_service_pb.GetCoordinatesCatheterPathRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetCoordinatesCatheterPathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetCoordinatesCatheterPathRequest(buffer_arg) {
  return catheter_path_service_pb.GetCoordinatesCatheterPathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetCoordinatesCatheterPathResponse(arg) {
  if (!(arg instanceof catheter_path_service_pb.GetCoordinatesCatheterPathResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetCoordinatesCatheterPathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetCoordinatesCatheterPathResponse(buffer_arg) {
  return catheter_path_service_pb.GetCoordinatesCatheterPathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListCatheterPathsRequest(arg) {
  if (!(arg instanceof catheter_path_service_pb.ListCatheterPathsRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListCatheterPathsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListCatheterPathsRequest(buffer_arg) {
  return catheter_path_service_pb.ListCatheterPathsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListCatheterPathsResponse(arg) {
  if (!(arg instanceof catheter_path_service_pb.ListCatheterPathsResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListCatheterPathsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListCatheterPathsResponse(buffer_arg) {
  return catheter_path_service_pb.ListCatheterPathsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Service for interacting with catheter paths
var CatheterPathServiceService = exports.CatheterPathServiceService = {
  // Create a catheter path
create: {
    path: '/dopltechnologies.protos.CatheterPathService/Create',
    requestStream: false,
    responseStream: false,
    requestType: catheter_path_service_pb.CreateCatheterPathRequest,
    responseType: catheter_path_service_pb.CreateCatheterPathResponse,
    requestSerialize: serialize_dopltechnologies_protos_CreateCatheterPathRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_CreateCatheterPathRequest,
    responseSerialize: serialize_dopltechnologies_protos_CreateCatheterPathResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_CreateCatheterPathResponse,
  },
  // Gets a catheter path
get: {
    path: '/dopltechnologies.protos.CatheterPathService/Get',
    requestStream: false,
    responseStream: false,
    requestType: catheter_path_service_pb.GetCatheterPathRequest,
    responseType: catheter_path_service_pb.GetCatheterPathResponse,
    requestSerialize: serialize_dopltechnologies_protos_GetCatheterPathRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_GetCatheterPathRequest,
    responseSerialize: serialize_dopltechnologies_protos_GetCatheterPathResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_GetCatheterPathResponse,
  },
  // Gets a catheter path coordinates
getCoordinates: {
    path: '/dopltechnologies.protos.CatheterPathService/GetCoordinates',
    requestStream: false,
    responseStream: true,
    requestType: catheter_path_service_pb.GetCoordinatesCatheterPathRequest,
    responseType: catheter_path_service_pb.GetCoordinatesCatheterPathResponse,
    requestSerialize: serialize_dopltechnologies_protos_GetCoordinatesCatheterPathRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_GetCoordinatesCatheterPathRequest,
    responseSerialize: serialize_dopltechnologies_protos_GetCoordinatesCatheterPathResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_GetCoordinatesCatheterPathResponse,
  },
  // Lists catheter paths
list: {
    path: '/dopltechnologies.protos.CatheterPathService/List',
    requestStream: false,
    responseStream: true,
    requestType: catheter_path_service_pb.ListCatheterPathsRequest,
    responseType: catheter_path_service_pb.ListCatheterPathsResponse,
    requestSerialize: serialize_dopltechnologies_protos_ListCatheterPathsRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_ListCatheterPathsRequest,
    responseSerialize: serialize_dopltechnologies_protos_ListCatheterPathsResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_ListCatheterPathsResponse,
  },
};

exports.CatheterPathServiceClient = grpc.makeGenericClientConstructor(CatheterPathServiceService);
