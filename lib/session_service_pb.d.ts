// package: dopltechnologies.protos
// file: session_service.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateSessionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearDeviceidsList(): void;
  getDeviceidsList(): Array<number>;
  setDeviceidsList(value: Array<number>): void;
  addDeviceids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
  static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
    name: string,
    deviceidsList: Array<number>,
  }
}

export class CreateSessionResponse extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionResponse): CreateSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionResponse;
  static deserializeBinaryFromReader(message: CreateSessionResponse, reader: jspb.BinaryReader): CreateSessionResponse;
}

export namespace CreateSessionResponse {
  export type AsObject = {
    session?: Session.AsObject,
  }
}

export class GetSessionRequest extends jspb.Message {
  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
  static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
    sessionid: number,
  }
}

export class GetSessionResponse extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionResponse): GetSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionResponse;
  static deserializeBinaryFromReader(message: GetSessionResponse, reader: jspb.BinaryReader): GetSessionResponse;
}

export namespace GetSessionResponse {
  export type AsObject = {
    session?: Session.AsObject,
  }
}

export class DeleteSessionRequest extends jspb.Message {
  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
  static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
  export type AsObject = {
    sessionid: number,
  }
}

export class ListSessionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
  static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
  export type AsObject = {
  }
}

export class ListSessionsResponse extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
  static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
  export type AsObject = {
    session?: Session.AsObject,
  }
}

export class DeleteSessionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionResponse): DeleteSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionResponse;
  static deserializeBinaryFromReader(message: DeleteSessionResponse, reader: jspb.BinaryReader): DeleteSessionResponse;
}

export namespace DeleteSessionResponse {
  export type AsObject = {
  }
}

export class WaitForSessionRequest extends jspb.Message {
  getDeviceid(): number;
  setDeviceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitForSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WaitForSessionRequest): WaitForSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitForSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitForSessionRequest;
  static deserializeBinaryFromReader(message: WaitForSessionRequest, reader: jspb.BinaryReader): WaitForSessionRequest;
}

export namespace WaitForSessionRequest {
  export type AsObject = {
    deviceid: number,
  }
}

export class WaitForSessionResponse extends jspb.Message {
  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitForSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WaitForSessionResponse): WaitForSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitForSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitForSessionResponse;
  static deserializeBinaryFromReader(message: WaitForSessionResponse, reader: jspb.BinaryReader): WaitForSessionResponse;
}

export namespace WaitForSessionResponse {
  export type AsObject = {
    sessionid: number,
  }
}

export class ListWaitingSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWaitingSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWaitingSessionRequest): ListWaitingSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWaitingSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWaitingSessionRequest;
  static deserializeBinaryFromReader(message: ListWaitingSessionRequest, reader: jspb.BinaryReader): ListWaitingSessionRequest;
}

export namespace ListWaitingSessionRequest {
  export type AsObject = {
  }
}

export class ListWaitingSessionResponse extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): common_pb.Device | undefined;
  setDevice(value?: common_pb.Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWaitingSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWaitingSessionResponse): ListWaitingSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListWaitingSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWaitingSessionResponse;
  static deserializeBinaryFromReader(message: ListWaitingSessionResponse, reader: jspb.BinaryReader): ListWaitingSessionResponse;
}

export namespace ListWaitingSessionResponse {
  export type AsObject = {
    device?: common_pb.Device.AsObject,
  }
}

export class JoinSessionRequest extends jspb.Message {
  getDeviceid(): number;
  setDeviceid(value: number): void;

  getSessionid(): number;
  setSessionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinSessionRequest): JoinSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinSessionRequest;
  static deserializeBinaryFromReader(message: JoinSessionRequest, reader: jspb.BinaryReader): JoinSessionRequest;
}

export namespace JoinSessionRequest {
  export type AsObject = {
    deviceid: number,
    sessionid: number,
  }
}

export class JoinSessionResponse extends jspb.Message {
  hasSessiondevice(): boolean;
  clearSessiondevice(): void;
  getSessiondevice(): SessionDevice | undefined;
  setSessiondevice(value?: SessionDevice): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinSessionResponse): JoinSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinSessionResponse;
  static deserializeBinaryFromReader(message: JoinSessionResponse, reader: jspb.BinaryReader): JoinSessionResponse;
}

export namespace JoinSessionResponse {
  export type AsObject = {
    sessiondevice?: SessionDevice.AsObject,
  }
}

export class Session extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearDevicesList(): void;
  getDevicesList(): Array<SessionDevice>;
  setDevicesList(value: Array<SessionDevice>): void;
  addDevices(value?: SessionDevice, index?: number): SessionDevice;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasClosed(): boolean;
  clearClosed(): void;
  getClosed(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosed(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: number,
    name: string,
    devicesList: Array<SessionDevice.AsObject>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closed?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SessionDevice extends jspb.Message {
  getConnected(): boolean;
  setConnected(value: boolean): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): common_pb.Device | undefined;
  setDevice(value?: common_pb.Device): void;

  clearProducesList(): void;
  getProducesList(): Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>;
  setProducesList(value: Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>): void;
  addProduces(value: common_pb.DataTypeMap[keyof common_pb.DataTypeMap], index?: number): common_pb.DataTypeMap[keyof common_pb.DataTypeMap];

  clearConsumesList(): void;
  getConsumesList(): Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>;
  setConsumesList(value: Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>): void;
  addConsumes(value: common_pb.DataTypeMap[keyof common_pb.DataTypeMap], index?: number): common_pb.DataTypeMap[keyof common_pb.DataTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionDevice.AsObject;
  static toObject(includeInstance: boolean, msg: SessionDevice): SessionDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionDevice;
  static deserializeBinaryFromReader(message: SessionDevice, reader: jspb.BinaryReader): SessionDevice;
}

export namespace SessionDevice {
  export type AsObject = {
    connected: boolean,
    device?: common_pb.Device.AsObject,
    producesList: Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>,
    consumesList: Array<common_pb.DataTypeMap[keyof common_pb.DataTypeMap]>,
  }
}

