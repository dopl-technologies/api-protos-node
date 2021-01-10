// GENERATED CODE -- DO NOT EDIT!

// package: dopltechnologies.protos
// file: device_service.proto

import * as device_service_pb from "./device_service_pb";
import * as grpc from "grpc";

interface IDeviceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<device_service_pb.CreateDeviceRequest, device_service_pb.CreateDeviceResponse>;
  get: grpc.MethodDefinition<device_service_pb.GetDeviceRequest, device_service_pb.GetDeviceResponse>;
  update: grpc.MethodDefinition<device_service_pb.UpdateDeviceRequest, device_service_pb.UpdateDeviceResponse>;
  list: grpc.MethodDefinition<device_service_pb.ListDevicesRequest, device_service_pb.ListDevicesResponse>;
  delete: grpc.MethodDefinition<device_service_pb.DeleteDeviceRequest, device_service_pb.DeleteDeviceResponse>;
}

export const DeviceServiceService: IDeviceServiceService;

export class DeviceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: device_service_pb.CreateDeviceRequest, callback: grpc.requestCallback<device_service_pb.CreateDeviceResponse>): grpc.ClientUnaryCall;
  create(argument: device_service_pb.CreateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.CreateDeviceResponse>): grpc.ClientUnaryCall;
  create(argument: device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.CreateDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: device_service_pb.GetDeviceRequest, callback: grpc.requestCallback<device_service_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: device_service_pb.GetDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: device_service_pb.GetDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  update(argument: device_service_pb.UpdateDeviceRequest, callback: grpc.requestCallback<device_service_pb.UpdateDeviceResponse>): grpc.ClientUnaryCall;
  update(argument: device_service_pb.UpdateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.UpdateDeviceResponse>): grpc.ClientUnaryCall;
  update(argument: device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.UpdateDeviceResponse>): grpc.ClientUnaryCall;
  list(argument: device_service_pb.ListDevicesRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
  list(argument: device_service_pb.ListDevicesRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
  delete(argument: device_service_pb.DeleteDeviceRequest, callback: grpc.requestCallback<device_service_pb.DeleteDeviceResponse>): grpc.ClientUnaryCall;
  delete(argument: device_service_pb.DeleteDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.DeleteDeviceResponse>): grpc.ClientUnaryCall;
  delete(argument: device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<device_service_pb.DeleteDeviceResponse>): grpc.ClientUnaryCall;
}
