// package: dopltechnologies.protos
// file: catheter_path_service.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateCatheterPathRequest extends jspb.Message {
  hasPath(): boolean;
  clearPath(): void;
  getPath(): CatheterPath | undefined;
  setPath(value?: CatheterPath): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCatheterPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCatheterPathRequest): CreateCatheterPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCatheterPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCatheterPathRequest;
  static deserializeBinaryFromReader(message: CreateCatheterPathRequest, reader: jspb.BinaryReader): CreateCatheterPathRequest;
}

export namespace CreateCatheterPathRequest {
  export type AsObject = {
    path?: CatheterPath.AsObject,
  }
}

export class CreateCatheterPathResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCatheterPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCatheterPathResponse): CreateCatheterPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCatheterPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCatheterPathResponse;
  static deserializeBinaryFromReader(message: CreateCatheterPathResponse, reader: jspb.BinaryReader): CreateCatheterPathResponse;
}

export namespace CreateCatheterPathResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetCatheterPathRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCatheterPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCatheterPathRequest): GetCatheterPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCatheterPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCatheterPathRequest;
  static deserializeBinaryFromReader(message: GetCatheterPathRequest, reader: jspb.BinaryReader): GetCatheterPathRequest;
}

export namespace GetCatheterPathRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetCatheterPathResponse extends jspb.Message {
  hasPath(): boolean;
  clearPath(): void;
  getPath(): CatheterPath | undefined;
  setPath(value?: CatheterPath): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCatheterPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCatheterPathResponse): GetCatheterPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCatheterPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCatheterPathResponse;
  static deserializeBinaryFromReader(message: GetCatheterPathResponse, reader: jspb.BinaryReader): GetCatheterPathResponse;
}

export namespace GetCatheterPathResponse {
  export type AsObject = {
    path?: CatheterPath.AsObject,
  }
}

export class GetCoordinatesCatheterPathRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoordinatesCatheterPathRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoordinatesCatheterPathRequest): GetCoordinatesCatheterPathRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCoordinatesCatheterPathRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoordinatesCatheterPathRequest;
  static deserializeBinaryFromReader(message: GetCoordinatesCatheterPathRequest, reader: jspb.BinaryReader): GetCoordinatesCatheterPathRequest;
}

export namespace GetCoordinatesCatheterPathRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetCoordinatesCatheterPathResponse extends jspb.Message {
  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): common_pb.CatheterCoordinates | undefined;
  setCoordinate(value?: common_pb.CatheterCoordinates): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoordinatesCatheterPathResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoordinatesCatheterPathResponse): GetCoordinatesCatheterPathResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCoordinatesCatheterPathResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoordinatesCatheterPathResponse;
  static deserializeBinaryFromReader(message: GetCoordinatesCatheterPathResponse, reader: jspb.BinaryReader): GetCoordinatesCatheterPathResponse;
}

export namespace GetCoordinatesCatheterPathResponse {
  export type AsObject = {
    coordinate?: common_pb.CatheterCoordinates.AsObject,
  }
}

export class ListCatheterPathsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCatheterPathsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCatheterPathsRequest): ListCatheterPathsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCatheterPathsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCatheterPathsRequest;
  static deserializeBinaryFromReader(message: ListCatheterPathsRequest, reader: jspb.BinaryReader): ListCatheterPathsRequest;
}

export namespace ListCatheterPathsRequest {
  export type AsObject = {
  }
}

export class ListCatheterPathsResponse extends jspb.Message {
  hasPath(): boolean;
  clearPath(): void;
  getPath(): CatheterPath | undefined;
  setPath(value?: CatheterPath): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCatheterPathsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCatheterPathsResponse): ListCatheterPathsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCatheterPathsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCatheterPathsResponse;
  static deserializeBinaryFromReader(message: ListCatheterPathsResponse, reader: jspb.BinaryReader): ListCatheterPathsResponse;
}

export namespace ListCatheterPathsResponse {
  export type AsObject = {
    path?: CatheterPath.AsObject,
  }
}

export class CatheterPath extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getStartcatheterdataid(): number;
  setStartcatheterdataid(value: number): void;

  getEndcatheterdataid(): number;
  setEndcatheterdataid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatheterPath.AsObject;
  static toObject(includeInstance: boolean, msg: CatheterPath): CatheterPath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatheterPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatheterPath;
  static deserializeBinaryFromReader(message: CatheterPath, reader: jspb.BinaryReader): CatheterPath;
}

export namespace CatheterPath {
  export type AsObject = {
    id: number,
    startcatheterdataid: number,
    endcatheterdataid: number,
    name: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

