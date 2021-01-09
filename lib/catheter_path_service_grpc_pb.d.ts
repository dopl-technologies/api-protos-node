// GENERATED CODE -- DO NOT EDIT!

// package: dopltechnologies.protos
// file: catheter_path_service.proto

import * as catheter_path_service_pb from "./catheter_path_service_pb";
import * as grpc from "grpc";

interface ICatheterPathServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<catheter_path_service_pb.CreateCatheterPathRequest, catheter_path_service_pb.CreateCatheterPathResponse>;
  get: grpc.MethodDefinition<catheter_path_service_pb.GetCatheterPathRequest, catheter_path_service_pb.GetCatheterPathResponse>;
  getCoordinates: grpc.MethodDefinition<catheter_path_service_pb.GetCoordinatesCatheterPathRequest, catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
  list: grpc.MethodDefinition<catheter_path_service_pb.ListCatheterPathsRequest, catheter_path_service_pb.ListCatheterPathsResponse>;
}

export const CatheterPathServiceService: ICatheterPathServiceService;

export class CatheterPathServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: catheter_path_service_pb.CreateCatheterPathRequest, callback: grpc.requestCallback<catheter_path_service_pb.CreateCatheterPathResponse>): grpc.ClientUnaryCall;
  create(argument: catheter_path_service_pb.CreateCatheterPathRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<catheter_path_service_pb.CreateCatheterPathResponse>): grpc.ClientUnaryCall;
  create(argument: catheter_path_service_pb.CreateCatheterPathRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<catheter_path_service_pb.CreateCatheterPathResponse>): grpc.ClientUnaryCall;
  get(argument: catheter_path_service_pb.GetCatheterPathRequest, callback: grpc.requestCallback<catheter_path_service_pb.GetCatheterPathResponse>): grpc.ClientUnaryCall;
  get(argument: catheter_path_service_pb.GetCatheterPathRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<catheter_path_service_pb.GetCatheterPathResponse>): grpc.ClientUnaryCall;
  get(argument: catheter_path_service_pb.GetCatheterPathRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<catheter_path_service_pb.GetCatheterPathResponse>): grpc.ClientUnaryCall;
  getCoordinates(argument: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
  getCoordinates(argument: catheter_path_service_pb.GetCoordinatesCatheterPathRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<catheter_path_service_pb.GetCoordinatesCatheterPathResponse>;
  list(argument: catheter_path_service_pb.ListCatheterPathsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
  list(argument: catheter_path_service_pb.ListCatheterPathsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<catheter_path_service_pb.ListCatheterPathsResponse>;
}
