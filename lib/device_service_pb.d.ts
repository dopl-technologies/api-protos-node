// package: dopltechnologies.protos
// file: device_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class CreateDeviceRequest extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): common_pb.DeviceInfo | undefined;
    setInfo(value?: common_pb.DeviceInfo): CreateDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
    static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
    export type AsObject = {
        info?: common_pb.DeviceInfo.AsObject,
    }
}

export class CreateDeviceResponse extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): common_pb.Device | undefined;
    setDevice(value?: common_pb.Device): CreateDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateDeviceResponse): CreateDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateDeviceResponse;
    static deserializeBinaryFromReader(message: CreateDeviceResponse, reader: jspb.BinaryReader): CreateDeviceResponse;
}

export namespace CreateDeviceResponse {
    export type AsObject = {
        device?: common_pb.Device.AsObject,
    }
}

export class GetDeviceRequest extends jspb.Message { 
    getDeviceid(): number;
    setDeviceid(value: number): GetDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
    static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
    export type AsObject = {
        deviceid: number,
    }
}

export class GetDeviceResponse extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): common_pb.Device | undefined;
    setDevice(value?: common_pb.Device): GetDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDeviceResponse): GetDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDeviceResponse;
    static deserializeBinaryFromReader(message: GetDeviceResponse, reader: jspb.BinaryReader): GetDeviceResponse;
}

export namespace GetDeviceResponse {
    export type AsObject = {
        device?: common_pb.Device.AsObject,
    }
}

export class UpdateDeviceRequest extends jspb.Message { 
    getDeviceid(): number;
    setDeviceid(value: number): UpdateDeviceRequest;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): common_pb.DeviceInfo | undefined;
    setInfo(value?: common_pb.DeviceInfo): UpdateDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
    static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
    export type AsObject = {
        deviceid: number,
        info?: common_pb.DeviceInfo.AsObject,
    }
}

export class UpdateDeviceResponse extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): common_pb.Device | undefined;
    setDevice(value?: common_pb.Device): UpdateDeviceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateDeviceResponse): UpdateDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateDeviceResponse;
    static deserializeBinaryFromReader(message: UpdateDeviceResponse, reader: jspb.BinaryReader): UpdateDeviceResponse;
}

export namespace UpdateDeviceResponse {
    export type AsObject = {
        device?: common_pb.Device.AsObject,
    }
}

export class ListDevicesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesRequest): ListDevicesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesRequest;
    static deserializeBinaryFromReader(message: ListDevicesRequest, reader: jspb.BinaryReader): ListDevicesRequest;
}

export namespace ListDevicesRequest {
    export type AsObject = {
    }
}

export class ListDevicesResponse extends jspb.Message { 

    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): common_pb.Device | undefined;
    setDevice(value?: common_pb.Device): ListDevicesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListDevicesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListDevicesResponse): ListDevicesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListDevicesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListDevicesResponse;
    static deserializeBinaryFromReader(message: ListDevicesResponse, reader: jspb.BinaryReader): ListDevicesResponse;
}

export namespace ListDevicesResponse {
    export type AsObject = {
        device?: common_pb.Device.AsObject,
    }
}

export class DeleteDeviceRequest extends jspb.Message { 
    getDeviceid(): number;
    setDeviceid(value: number): DeleteDeviceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
    static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
    export type AsObject = {
        deviceid: number,
    }
}

export class DeleteDeviceResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDeviceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDeviceResponse): DeleteDeviceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDeviceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDeviceResponse;
    static deserializeBinaryFromReader(message: DeleteDeviceResponse, reader: jspb.BinaryReader): DeleteDeviceResponse;
}

export namespace DeleteDeviceResponse {
    export type AsObject = {
    }
}
