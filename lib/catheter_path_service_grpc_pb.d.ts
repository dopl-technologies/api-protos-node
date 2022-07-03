// package: dopltechnologies.protos
// file: catheter_path_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as catheter_path_service_pb from "./catheter_path_service_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ICatheterPathServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ICatheterPathServiceService_ICreate;
    get: ICatheterPathServiceService_IGet;
    getCoordinates: ICatheterPathServiceService_IGetCoordinates;
    list: ICatheterPathServiceService_IList;
}

interface ICatheterPathServiceService_ICreate extends grpc.MethodDefinition<catheter_path_service_pb.CreateCatheterPathRequest, catheter_path_service_pb.CreateCatheterPathResponse> {
    path: "/dopltechnologies.protos.CatheterPathService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catheter_path_service_pb.CreateCatheterPathRequest>;
    requestDeserialize: grpc.deserialize<catheter_path_service_pb.CreateCatheterPathRequest>;
    responseSerialize: grpc.serialize<catheter_path_service_pb.CreateCatheterPathResponse>;
    responseDeserialize: grpc.deserialize<catheter_path_service_pb.CreateCatheterPathResponse>;
}
interface ICatheterPathServiceService_IGet extends grpc.MethodDefinition<catheter_path_service_pb.GetCatheterPathRequest, catheter_path_service_pb.GetCatheterPathResponse> {
    path: "/dopltechnologies.protos.CatheterPathService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<catheter_path_service_pb.GetCatheterPathRequest>;
    requestDeserialize: grpc.deserialize<catheter_path_service_pb.GetCatheterPathRequest>;
    responseSerialize: grpc.serialize<catheter_path_service_pb.GetCatheterPathResponse>;
    responseDeserialize: grpc.deserialize<catheter_path_service_pb.GetCatheterPathResponse>;
}
interface ICatheterPathServiceService_IGetCoordinates extends grpc.MethodDefinition<catheter_path_service_pb.GetCoordinatesCatheterPathRequest, catheter_path_service_pb.GetCoordinatesCatheterPathResponse> {
    path: "/dopltechnologies.protos.CatheterPathService/GetCoordinates";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<catheter_path_service_pb.GetCoordinatesCatheterPathRequest>;
    requestDeserialize: grpc.deserialize<catheter_path_service_pb.GetCoordinatesCatheterPathRequest>;
    responseSerialize: grpc.serialize<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    responseDeserialize: grpc.deserialize<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
}
interface ICatheterPathServiceService_IList extends grpc.MethodDefinition<catheter_path_service_pb.ListCatheterPathsRequest, catheter_path_service_pb.ListCatheterPathsResponse> {
    path: "/dopltechnologies.protos.CatheterPathService/List";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<catheter_path_service_pb.ListCatheterPathsRequest>;
    requestDeserialize: grpc.deserialize<catheter_path_service_pb.ListCatheterPathsRequest>;
    responseSerialize: grpc.serialize<catheter_path_service_pb.ListCatheterPathsResponse>;
    responseDeserialize: grpc.deserialize<catheter_path_service_pb.ListCatheterPathsResponse>;
}

export const CatheterPathServiceService: ICatheterPathServiceService;

export interface ICatheterPathServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<catheter_path_service_pb.CreateCatheterPathRequest, catheter_path_service_pb.CreateCatheterPathResponse>;
    get: grpc.handleUnaryCall<catheter_path_service_pb.GetCatheterPathRequest, catheter_path_service_pb.GetCatheterPathResponse>;
    getCoordinates: grpc.handleServerStreamingCall<catheter_path_service_pb.GetCoordinatesCatheterPathRequest, catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    list: grpc.handleServerStreamingCall<catheter_path_service_pb.ListCatheterPathsRequest, catheter_path_service_pb.ListCatheterPathsResponse>;
}

export interface ICatheterPathServiceClient {
    create(request: catheter_path_service_pb.CreateCatheterPathRequest, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    create(request: catheter_path_service_pb.CreateCatheterPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    create(request: catheter_path_service_pb.CreateCatheterPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    get(request: catheter_path_service_pb.GetCatheterPathRequest, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    get(request: catheter_path_service_pb.GetCatheterPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    get(request: catheter_path_service_pb.GetCatheterPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    getCoordinates(request: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    getCoordinates(request: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    list(request: catheter_path_service_pb.ListCatheterPathsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
    list(request: catheter_path_service_pb.ListCatheterPathsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
}

export class CatheterPathServiceClient extends grpc.Client implements ICatheterPathServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: catheter_path_service_pb.CreateCatheterPathRequest, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public create(request: catheter_path_service_pb.CreateCatheterPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public create(request: catheter_path_service_pb.CreateCatheterPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.CreateCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public get(request: catheter_path_service_pb.GetCatheterPathRequest, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public get(request: catheter_path_service_pb.GetCatheterPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public get(request: catheter_path_service_pb.GetCatheterPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: catheter_path_service_pb.GetCatheterPathResponse) => void): grpc.ClientUnaryCall;
    public getCoordinates(request: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    public getCoordinates(request: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
    public list(request: catheter_path_service_pb.ListCatheterPathsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
    public list(request: catheter_path_service_pb.ListCatheterPathsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
}
