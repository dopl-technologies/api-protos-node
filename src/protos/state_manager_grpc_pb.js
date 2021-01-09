// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var state_manager_pb = require('./state_manager_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_dopltechnologies_protos_RecordFramesRequest(arg) {
  if (!(arg instanceof state_manager_pb.RecordFramesRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.RecordFramesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_RecordFramesRequest(buffer_arg) {
  return state_manager_pb.RecordFramesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_RecordFramesResponse(arg) {
  if (!(arg instanceof state_manager_pb.RecordFramesResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.RecordFramesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_RecordFramesResponse(buffer_arg) {
  return state_manager_pb.RecordFramesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// Manages the state of the procedure
var StateManagerServiceService = exports.StateManagerServiceService = {
  // Records frames
  recordFrames: {
    path: '/dopltechnologies.protos.StateManagerService/RecordFrames',
    requestStream: true,
    responseStream: false,
    requestType: state_manager_pb.RecordFramesRequest,
    responseType: state_manager_pb.RecordFramesResponse,
    requestSerialize: serialize_dopltechnologies_protos_RecordFramesRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_RecordFramesRequest,
    responseSerialize: serialize_dopltechnologies_protos_RecordFramesResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_RecordFramesResponse,
  },
};

exports.StateManagerServiceClient = grpc.makeGenericClientConstructor(StateManagerServiceService);
