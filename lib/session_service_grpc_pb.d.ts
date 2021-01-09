// GENERATED CODE -- DO NOT EDIT!

// package: dopltechnologies.protos
// file: session_service.proto

import * as session_service_pb from "./session_service_pb";
import * as grpc from "grpc";

interface ISessionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<session_service_pb.CreateSessionRequest, session_service_pb.CreateSessionResponse>;
  get: grpc.MethodDefinition<session_service_pb.GetSessionRequest, session_service_pb.GetSessionResponse>;
  list: grpc.MethodDefinition<session_service_pb.ListSessionsRequest, session_service_pb.ListSessionsResponse>;
  delete: grpc.MethodDefinition<session_service_pb.DeleteSessionRequest, session_service_pb.DeleteSessionResponse>;
  waitFor: grpc.MethodDefinition<session_service_pb.WaitForSessionRequest, session_service_pb.WaitForSessionResponse>;
  listWaiting: grpc.MethodDefinition<session_service_pb.ListWaitingSessionRequest, session_service_pb.ListWaitingSessionResponse>;
  join: grpc.MethodDefinition<session_service_pb.JoinSessionRequest, session_service_pb.JoinSessionResponse>;
}

export const SessionServiceService: ISessionServiceService;

export class SessionServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: session_service_pb.CreateSessionRequest, callback: grpc.requestCallback<session_service_pb.CreateSessionResponse>): grpc.ClientUnaryCall;
  create(argument: session_service_pb.CreateSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.CreateSessionResponse>): grpc.ClientUnaryCall;
  create(argument: session_service_pb.CreateSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.CreateSessionResponse>): grpc.ClientUnaryCall;
  get(argument: session_service_pb.GetSessionRequest, callback: grpc.requestCallback<session_service_pb.GetSessionResponse>): grpc.ClientUnaryCall;
  get(argument: session_service_pb.GetSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.GetSessionResponse>): grpc.ClientUnaryCall;
  get(argument: session_service_pb.GetSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.GetSessionResponse>): grpc.ClientUnaryCall;
  list(argument: session_service_pb.ListSessionsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
  list(argument: session_service_pb.ListSessionsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.ListSessionsResponse>;
  delete(argument: session_service_pb.DeleteSessionRequest, callback: grpc.requestCallback<session_service_pb.DeleteSessionResponse>): grpc.ClientUnaryCall;
  delete(argument: session_service_pb.DeleteSessionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.DeleteSessionResponse>): grpc.ClientUnaryCall;
  delete(argument: session_service_pb.DeleteSessionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<session_service_pb.DeleteSessionResponse>): grpc.ClientUnaryCall;
  waitFor(argument: session_service_pb.WaitForSessionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
  waitFor(argument: session_service_pb.WaitForSessionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.WaitForSessionResponse>;
  listWaiting(argument: session_service_pb.ListWaitingSessionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
  listWaiting(argument: session_service_pb.ListWaitingSessionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.ListWaitingSessionResponse>;
  join(argument: session_service_pb.JoinSessionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
  join(argument: session_service_pb.JoinSessionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<session_service_pb.JoinSessionResponse>;
}
