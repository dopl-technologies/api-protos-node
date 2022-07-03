// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var device_service_pb = require('./device_service_pb.js');
var common_pb = require('./common_pb.js');

function serialize_dopltechnologies_protos_CreateDeviceRequest(arg) {
  if (!(arg instanceof device_service_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateDeviceRequest(buffer_arg) {
  return device_service_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_CreateDeviceResponse(arg) {
  if (!(arg instanceof device_service_pb.CreateDeviceResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.CreateDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_CreateDeviceResponse(buffer_arg) {
  return device_service_pb.CreateDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_DeleteDeviceRequest(arg) {
  if (!(arg instanceof device_service_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_DeleteDeviceRequest(buffer_arg) {
  return device_service_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_DeleteDeviceResponse(arg) {
  if (!(arg instanceof device_service_pb.DeleteDeviceResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.DeleteDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_DeleteDeviceResponse(buffer_arg) {
  return device_service_pb.DeleteDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetDeviceRequest(arg) {
  if (!(arg instanceof device_service_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetDeviceRequest(buffer_arg) {
  return device_service_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_GetDeviceResponse(arg) {
  if (!(arg instanceof device_service_pb.GetDeviceResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.GetDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_GetDeviceResponse(buffer_arg) {
  return device_service_pb.GetDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListDevicesRequest(arg) {
  if (!(arg instanceof device_service_pb.ListDevicesRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListDevicesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListDevicesRequest(buffer_arg) {
  return device_service_pb.ListDevicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_ListDevicesResponse(arg) {
  if (!(arg instanceof device_service_pb.ListDevicesResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.ListDevicesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_ListDevicesResponse(buffer_arg) {
  return device_service_pb.ListDevicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_UpdateDeviceRequest(arg) {
  if (!(arg instanceof device_service_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type dopltechnologies.protos.UpdateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_UpdateDeviceRequest(buffer_arg) {
  return device_service_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dopltechnologies_protos_UpdateDeviceResponse(arg) {
  if (!(arg instanceof device_service_pb.UpdateDeviceResponse)) {
    throw new Error('Expected argument of type dopltechnologies.protos.UpdateDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dopltechnologies_protos_UpdateDeviceResponse(buffer_arg) {
  return device_service_pb.UpdateDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


//
// The DeviceService manages devices. Once a device is created
// it can be used in a telerobotic procedure.
var DeviceServiceService = exports.DeviceServiceService = {
  // Creates a new device
create: {
    path: '/dopltechnologies.protos.DeviceService/Create',
    requestStream: false,
    responseStream: false,
    requestType: device_service_pb.CreateDeviceRequest,
    responseType: device_service_pb.CreateDeviceResponse,
    requestSerialize: serialize_dopltechnologies_protos_CreateDeviceRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_CreateDeviceRequest,
    responseSerialize: serialize_dopltechnologies_protos_CreateDeviceResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_CreateDeviceResponse,
  },
  // Get information about a single device
get: {
    path: '/dopltechnologies.protos.DeviceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: device_service_pb.GetDeviceRequest,
    responseType: device_service_pb.GetDeviceResponse,
    requestSerialize: serialize_dopltechnologies_protos_GetDeviceRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_GetDeviceRequest,
    responseSerialize: serialize_dopltechnologies_protos_GetDeviceResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_GetDeviceResponse,
  },
  // Update information about a single device
update: {
    path: '/dopltechnologies.protos.DeviceService/Update',
    requestStream: false,
    responseStream: false,
    requestType: device_service_pb.UpdateDeviceRequest,
    responseType: device_service_pb.UpdateDeviceResponse,
    requestSerialize: serialize_dopltechnologies_protos_UpdateDeviceRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_UpdateDeviceRequest,
    responseSerialize: serialize_dopltechnologies_protos_UpdateDeviceResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_UpdateDeviceResponse,
  },
  // Lists all devices
list: {
    path: '/dopltechnologies.protos.DeviceService/List',
    requestStream: false,
    responseStream: true,
    requestType: device_service_pb.ListDevicesRequest,
    responseType: device_service_pb.ListDevicesResponse,
    requestSerialize: serialize_dopltechnologies_protos_ListDevicesRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_ListDevicesRequest,
    responseSerialize: serialize_dopltechnologies_protos_ListDevicesResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_ListDevicesResponse,
  },
  // Deletes a device
delete: {
    path: '/dopltechnologies.protos.DeviceService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: device_service_pb.DeleteDeviceRequest,
    responseType: device_service_pb.DeleteDeviceResponse,
    requestSerialize: serialize_dopltechnologies_protos_DeleteDeviceRequest,
    requestDeserialize: deserialize_dopltechnologies_protos_DeleteDeviceRequest,
    responseSerialize: serialize_dopltechnologies_protos_DeleteDeviceResponse,
    responseDeserialize: deserialize_dopltechnologies_protos_DeleteDeviceResponse,
  },
};

exports.DeviceServiceClient = grpc.makeGenericClientConstructor(DeviceServiceService);
