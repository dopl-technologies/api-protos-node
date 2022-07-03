// package: dopltechnologies.protos
// file: session_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as session_service_pb from "./session_service_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISessionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISessionServiceService_ICreate;
    get: ISessionServiceService_IGet;
    list: ISessionServiceService_IList;
    delete: ISessionServiceService_IDelete;
    waitFor: ISessionServiceService_IWaitFor;
    listWaiting: ISessionServiceService_IListWaiting;
    join: ISessionServiceService_IJoin;
}

interface ISessionServiceService_ICreate extends grpc.MethodDefinition<session_service_pb.CreateSessionRequest, session_service_pb.CreateSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_service_pb.CreateSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.CreateSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.CreateSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.CreateSessionResponse>;
}
interface ISessionServiceService_IGet extends grpc.MethodDefinition<session_service_pb.GetSessionRequest, session_service_pb.GetSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_service_pb.GetSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.GetSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.GetSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.GetSessionResponse>;
}
interface ISessionServiceService_IList extends grpc.MethodDefinition<session_service_pb.ListSessionsRequest, session_service_pb.ListSessionsResponse> {
    path: "/dopltechnologies.protos.SessionService/List";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_service_pb.ListSessionsRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.ListSessionsRequest>;
    responseSerialize: grpc.serialize<session_service_pb.ListSessionsResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.ListSessionsResponse>;
}
interface ISessionServiceService_IDelete extends grpc.MethodDefinition<session_service_pb.DeleteSessionRequest, session_service_pb.DeleteSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<session_service_pb.DeleteSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.DeleteSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.DeleteSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.DeleteSessionResponse>;
}
interface ISessionServiceService_IWaitFor extends grpc.MethodDefinition<session_service_pb.WaitForSessionRequest, session_service_pb.WaitForSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/WaitFor";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_service_pb.WaitForSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.WaitForSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.WaitForSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.WaitForSessionResponse>;
}
interface ISessionServiceService_IListWaiting extends grpc.MethodDefinition<session_service_pb.ListWaitingSessionRequest, session_service_pb.ListWaitingSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/ListWaiting";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_service_pb.ListWaitingSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.ListWaitingSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.ListWaitingSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.ListWaitingSessionResponse>;
}
interface ISessionServiceService_IJoin extends grpc.MethodDefinition<session_service_pb.JoinSessionRequest, session_service_pb.JoinSessionResponse> {
    path: "/dopltechnologies.protos.SessionService/Join";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<session_service_pb.JoinSessionRequest>;
    requestDeserialize: grpc.deserialize<session_service_pb.JoinSessionRequest>;
    responseSerialize: grpc.serialize<session_service_pb.JoinSessionResponse>;
    responseDeserialize: grpc.deserialize<session_service_pb.JoinSessionResponse>;
}

export const SessionServiceService: ISessionServiceService;

export interface ISessionServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<session_service_pb.CreateSessionRequest, session_service_pb.CreateSessionResponse>;
    get: grpc.handleUnaryCall<session_service_pb.GetSessionRequest, session_service_pb.GetSessionResponse>;
    list: grpc.handleServerStreamingCall<session_service_pb.ListSessionsRequest, session_service_pb.ListSessionsResponse>;
    delete: grpc.handleUnaryCall<session_service_pb.DeleteSessionRequest, session_service_pb.DeleteSessionResponse>;
    waitFor: grpc.handleServerStreamingCall<session_service_pb.WaitForSessionRequest, session_service_pb.WaitForSessionResponse>;
    listWaiting: grpc.handleServerStreamingCall<session_service_pb.ListWaitingSessionRequest, session_service_pb.ListWaitingSessionResponse>;
    join: grpc.handleServerStreamingCall<session_service_pb.JoinSessionRequest, session_service_pb.JoinSessionResponse>;
}

export interface ISessionServiceClient {
    create(request: session_service_pb.CreateSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    create(request: session_service_pb.CreateSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    create(request: session_service_pb.CreateSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    get(request: session_service_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    get(request: session_service_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    get(request: session_service_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    list(request: session_service_pb.ListSessionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
    list(request: session_service_pb.ListSessionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
    delete(request: session_service_pb.DeleteSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    delete(request: session_service_pb.DeleteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    delete(request: session_service_pb.DeleteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    waitFor(request: session_service_pb.WaitForSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
    waitFor(request: session_service_pb.WaitForSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
    listWaiting(request: session_service_pb.ListWaitingSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
    listWaiting(request: session_service_pb.ListWaitingSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
    join(request: session_service_pb.JoinSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
    join(request: session_service_pb.JoinSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
}

export class SessionServiceClient extends grpc.Client implements ISessionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: session_service_pb.CreateSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    public create(request: session_service_pb.CreateSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    public create(request: session_service_pb.CreateSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.CreateSessionResponse) => void): grpc.ClientUnaryCall;
    public get(request: session_service_pb.GetSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public get(request: session_service_pb.GetSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public get(request: session_service_pb.GetSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.GetSessionResponse) => void): grpc.ClientUnaryCall;
    public list(request: session_service_pb.ListSessionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
    public list(request: session_service_pb.ListSessionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
    public delete(request: session_service_pb.DeleteSessionRequest, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    public delete(request: session_service_pb.DeleteSessionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    public delete(request: session_service_pb.DeleteSessionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: session_service_pb.DeleteSessionResponse) => void): grpc.ClientUnaryCall;
    public waitFor(request: session_service_pb.WaitForSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
    public waitFor(request: session_service_pb.WaitForSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
    public listWaiting(request: session_service_pb.ListWaitingSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
    public listWaiting(request: session_service_pb.ListWaitingSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
    public join(request: session_service_pb.JoinSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
    public join(request: session_service_pb.JoinSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
}
