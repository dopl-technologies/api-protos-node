// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var session_service_pb = require('./session_service_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_dopltechnologies_protos_CreateSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.CreateSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateSessionRequest(buffer_arg) {
  return session_service_pb.CreateSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_CreateSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.CreateSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateSessionResponse(buffer_arg) {
  return session_service_pb.CreateSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_DeleteSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.DeleteSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.DeleteSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_DeleteSessionRequest(buffer_arg) {
  return session_service_pb.DeleteSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_DeleteSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.DeleteSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.DeleteSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_DeleteSessionResponse(buffer_arg) {
  return session_service_pb.DeleteSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.GetSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetSessionRequest(buffer_arg) {
  return session_service_pb.GetSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.GetSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetSessionResponse(buffer_arg) {
  return session_service_pb.GetSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_JoinSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.JoinSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.JoinSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_JoinSessionRequest(buffer_arg) {
  return session_service_pb.JoinSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_JoinSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.JoinSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.JoinSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_JoinSessionResponse(buffer_arg) {
  return session_service_pb.JoinSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListSessionsRequest(arg) {
  if (!(arg instanceof session_service_pb.ListSessionsRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListSessionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListSessionsRequest(buffer_arg) {
  return session_service_pb.ListSessionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListSessionsResponse(arg) {
  if (!(arg instanceof session_service_pb.ListSessionsResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListSessionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListSessionsResponse(buffer_arg) {
  return session_service_pb.ListSessionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListWaitingSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.ListWaitingSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListWaitingSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListWaitingSessionRequest(buffer_arg) {
  return session_service_pb.ListWaitingSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListWaitingSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.ListWaitingSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListWaitingSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListWaitingSessionResponse(buffer_arg) {
  return session_service_pb.ListWaitingSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_WaitForSessionRequest(arg) {
  if (!(arg instanceof session_service_pb.WaitForSessionRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.WaitForSessionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_WaitForSessionRequest(buffer_arg) {
  return session_service_pb.WaitForSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_WaitForSessionResponse(arg) {
  if (!(arg instanceof session_service_pb.WaitForSessionResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.WaitForSessionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_WaitForSessionResponse(buffer_arg) {
  return session_service_pb.WaitForSessionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The SessionService manages a telerobotic session. In its current implementation
// it manages a single controller connecting to a single robot. In the future, a
// session may additionally include medical devices, user interfaces, and other
// items neccessary to achieve telerobotics. 
var SessionServiceService = exports.SessionServiceService = {
  // Creates a session, causing each Statusing device to recieve the other
  // device's address
  create: {
    path: '/dopltechnologies.protos.SessionService/Create',
    requestStream: false,
    responseStream: false,
    requestType: session_service_pb.CreateSessionRequest,
    responseType: session_service_pb.CreateSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_CreateSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_CreateSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_CreateSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_CreateSessionResponse,
  },
  // Get information about a single session
  get: {
    path: '/dopltechnologies.protos.SessionService/Get',
    requestStream: false,
    responseStream: false,
    requestType: session_service_pb.GetSessionRequest,
    responseType: session_service_pb.GetSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_GetSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_GetSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_GetSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_GetSessionResponse,
  },
  // List sessions
  list: {
    path: '/dopltechnologies.protos.SessionService/List',
    requestStream: false,
    responseStream: true,
    requestType: session_service_pb.ListSessionsRequest,
    responseType: session_service_pb.ListSessionsResponse,
    requestSerialize: serialize_dopltechnologies_protos_ListSessionsRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_ListSessionsRequest,
    responseSerialize: serialize_dopltechnologies_protos_ListSessionsResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_ListSessionsResponse,
  },
  // Deletes a session
  delete: {
    path: '/dopltechnologies.protos.SessionService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: session_service_pb.DeleteSessionRequest,
    responseType: session_service_pb.DeleteSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_DeleteSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_DeleteSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_DeleteSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_DeleteSessionResponse,
  },
  // Connects a client waiting for a session
  waitFor: {
    path: '/dopltechnologies.protos.SessionService/WaitFor',
    requestStream: false,
    responseStream: true,
    requestType: session_service_pb.WaitForSessionRequest,
    responseType: session_service_pb.WaitForSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_WaitForSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_WaitForSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_WaitForSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_WaitForSessionResponse,
  },
  // ListWaiting lists waiting clients
  // TODO: Rethink design. This seems odd
  listWaiting: {
    path: '/dopltechnologies.protos.SessionService/ListWaiting',
    requestStream: false,
    responseStream: true,
    requestType: session_service_pb.ListWaitingSessionRequest,
    responseType: session_service_pb.ListWaitingSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_ListWaitingSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_ListWaitingSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_ListWaitingSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_ListWaitingSessionResponse,
  },
  // Streams messages between the client and server indicating the session's status
  join: {
    path: '/dopltechnologies.protos.SessionService/Join',
    requestStream: false,
    responseStream: true,
    requestType: session_service_pb.JoinSessionRequest,
    responseType: session_service_pb.JoinSessionResponse,
    requestSerialize: serialize_dopltechnologies_protos_JoinSessionRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_JoinSessionRequest,
    responseSerialize: serialize_dopltechnologies_protos_JoinSessionResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_JoinSessionResponse,
  },
};

exports.SessionServiceClient = grpc.makeGenericClientConstructor(SessionServiceService);
