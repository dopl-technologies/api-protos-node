// package: dopltechnologies.protos
// file: state_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as state_manager_pb from "./state_manager_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStateManagerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    recordFrames: IStateManagerServiceService_IRecordFrames;
}

interface IStateManagerServiceService_IRecordFrames extends grpc.MethodDefinition<state_manager_pb.RecordFramesRequest, state_manager_pb.RecordFramesResponse> {
    path: "/dopltechnologies.protos.StateManagerService/RecordFrames";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<state_manager_pb.RecordFramesRequest>;
    requestDeserialize: grpc.deserialize<state_manager_pb.RecordFramesRequest>;
    responseSerialize: grpc.serialize<state_manager_pb.RecordFramesResponse>;
    responseDeserialize: grpc.deserialize<state_manager_pb.RecordFramesResponse>;
}

export const StateManagerServiceService: IStateManagerServiceService;

export interface IStateManagerServiceServer extends grpc.UntypedServiceImplementation {
    recordFrames: handleClientStreamingCall<state_manager_pb.RecordFramesRequest, state_manager_pb.RecordFramesResponse>;
}

export interface IStateManagerServiceClient {
    recordFrames(callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    recordFrames(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    recordFrames(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    recordFrames(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
}

export class StateManagerServiceClient extends grpc.Client implements IStateManagerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public recordFrames(callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    public recordFrames(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    public recordFrames(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
    public recordFrames(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: state_manager_pb.RecordFramesResponse) => void): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
}
