// package: dopltechnologies.protos
// file: state_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RecordFramesRequest extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): common_pb.Frame | undefined;
    setData(value?: common_pb.Frame): RecordFramesRequest;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): RecordFramesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordFramesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordFramesRequest): RecordFramesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordFramesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordFramesRequest;
    static deserializeBinaryFromReader(message: RecordFramesRequest, reader: jspb.BinaryReader): RecordFramesRequest;
}

export namespace RecordFramesRequest {
    export type AsObject = {
        data?: common_pb.Frame.AsObject,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class RecordFramesResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordFramesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordFramesResponse): RecordFramesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordFramesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordFramesResponse;
    static deserializeBinaryFromReader(message: RecordFramesResponse, reader: jspb.BinaryReader): RecordFramesResponse;
}

export namespace RecordFramesResponse {
    export type AsObject = {
    }
}
