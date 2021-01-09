// GENERATED CODE -- DO NOT EDIT!

// package: dopltechnologies.protos
// file: state_manager.proto

import * as state_manager_pb from "./state_manager_pb";
import * as grpc from "grpc";

interface IStateManagerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  recordFrames: grpc.MethodDefinition<state_manager_pb.RecordFramesRequest, state_manager_pb.RecordFramesResponse>;
}

export const StateManagerServiceService: IStateManagerServiceService;

export class StateManagerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  recordFrames(callback: grpc.requestCallback<state_manager_pb.RecordFramesResponse>): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
  recordFrames(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<state_manager_pb.RecordFramesResponse>): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
  recordFrames(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<state_manager_pb.RecordFramesResponse>): grpc.ClientWritableStream<state_manager_pb.RecordFramesRequest>;
}
