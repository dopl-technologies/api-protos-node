// package: dopltechnologies.protos
// file: device_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as device_service_pb from "./device_service_pb";
import * as common_pb from "./common_pb";

interface IDeviceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IDeviceServiceService_ICreate;
    get: IDeviceServiceService_IGet;
    update: IDeviceServiceService_IUpdate;
    list: IDeviceServiceService_IList;
    delete: IDeviceServiceService_IDelete;
}

interface IDeviceServiceService_ICreate extends grpc.MethodDefinition<device_service_pb.CreateDeviceRequest, device_service_pb.CreateDeviceResponse> {
    path: "/dopltechnologies.protos.DeviceService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<device_service_pb.CreateDeviceRequest>;
    requestDeserialize: grpc.deserialize<device_service_pb.CreateDeviceRequest>;
    responseSerialize: grpc.serialize<device_service_pb.CreateDeviceResponse>;
    responseDeserialize: grpc.deserialize<device_service_pb.CreateDeviceResponse>;
}
interface IDeviceServiceService_IGet extends grpc.MethodDefinition<device_service_pb.GetDeviceRequest, device_service_pb.GetDeviceResponse> {
    path: "/dopltechnologies.protos.DeviceService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<device_service_pb.GetDeviceRequest>;
    requestDeserialize: grpc.deserialize<device_service_pb.GetDeviceRequest>;
    responseSerialize: grpc.serialize<device_service_pb.GetDeviceResponse>;
    responseDeserialize: grpc.deserialize<device_service_pb.GetDeviceResponse>;
}
interface IDeviceServiceService_IUpdate extends grpc.MethodDefinition<device_service_pb.UpdateDeviceRequest, device_service_pb.UpdateDeviceResponse> {
    path: "/dopltechnologies.protos.DeviceService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<device_service_pb.UpdateDeviceRequest>;
    requestDeserialize: grpc.deserialize<device_service_pb.UpdateDeviceRequest>;
    responseSerialize: grpc.serialize<device_service_pb.UpdateDeviceResponse>;
    responseDeserialize: grpc.deserialize<device_service_pb.UpdateDeviceResponse>;
}
interface IDeviceServiceService_IList extends grpc.MethodDefinition<device_service_pb.ListDevicesRequest, device_service_pb.ListDevicesResponse> {
    path: "/dopltechnologies.protos.DeviceService/List";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<device_service_pb.ListDevicesRequest>;
    requestDeserialize: grpc.deserialize<device_service_pb.ListDevicesRequest>;
    responseSerialize: grpc.serialize<device_service_pb.ListDevicesResponse>;
    responseDeserialize: grpc.deserialize<device_service_pb.ListDevicesResponse>;
}
interface IDeviceServiceService_IDelete extends grpc.MethodDefinition<device_service_pb.DeleteDeviceRequest, device_service_pb.DeleteDeviceResponse> {
    path: "/dopltechnologies.protos.DeviceService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<device_service_pb.DeleteDeviceRequest>;
    requestDeserialize: grpc.deserialize<device_service_pb.DeleteDeviceRequest>;
    responseSerialize: grpc.serialize<device_service_pb.DeleteDeviceResponse>;
    responseDeserialize: grpc.deserialize<device_service_pb.DeleteDeviceResponse>;
}

export const DeviceServiceService: IDeviceServiceService;

export interface IDeviceServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<device_service_pb.CreateDeviceRequest, device_service_pb.CreateDeviceResponse>;
    get: grpc.handleUnaryCall<device_service_pb.GetDeviceRequest, device_service_pb.GetDeviceResponse>;
    update: grpc.handleUnaryCall<device_service_pb.UpdateDeviceRequest, device_service_pb.UpdateDeviceResponse>;
    list: grpc.handleServerStreamingCall<device_service_pb.ListDevicesRequest, device_service_pb.ListDevicesResponse>;
    delete: grpc.handleUnaryCall<device_service_pb.DeleteDeviceRequest, device_service_pb.DeleteDeviceResponse>;
}

export interface IDeviceServiceClient {
    create(request: device_service_pb.CreateDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    create(request: device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    create(request: device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    get(request: device_service_pb.GetDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    get(request: device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    get(request: device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    update(request: device_service_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    update(request: device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    update(request: device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    list(request: device_service_pb.ListDevicesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
    list(request: device_service_pb.ListDevicesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
    delete(request: device_service_pb.DeleteDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
    delete(request: device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
    delete(request: device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
}

export class DeviceServiceClient extends grpc.Client implements IDeviceServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: device_service_pb.CreateDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    public create(request: device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    public create(request: device_service_pb.CreateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.CreateDeviceResponse) => void): grpc.ClientUnaryCall;
    public get(request: device_service_pb.GetDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public get(request: device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public get(request: device_service_pb.GetDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.GetDeviceResponse) => void): grpc.ClientUnaryCall;
    public update(request: device_service_pb.UpdateDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    public update(request: device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    public update(request: device_service_pb.UpdateDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.UpdateDeviceResponse) => void): grpc.ClientUnaryCall;
    public list(request: device_service_pb.ListDevicesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
    public list(request: device_service_pb.ListDevicesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<device_service_pb.ListDevicesResponse>;
    public delete(request: device_service_pb.DeleteDeviceRequest, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
    public delete(request: device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
    public delete(request: device_service_pb.DeleteDeviceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: device_service_pb.DeleteDeviceResponse) => void): grpc.ClientUnaryCall;
}
