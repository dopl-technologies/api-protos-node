// package: dopltechnologies.protos
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Device extends jspb.Message { 
    getId(): number;
    setId(value: number): Device;

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): DeviceInfo | undefined;
    setInfo(value?: DeviceInfo): Device;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Device.AsObject;
    static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Device;
    static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
    export type AsObject = {
        id: number,
        info?: DeviceInfo.AsObject,
    }
}

export class DeviceInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): DeviceInfo;
    getType(): DeviceType;
    setType(value: DeviceType): DeviceInfo;
    getIp(): string;
    setIp(value: string): DeviceInfo;
    getPort(): number;
    setPort(value: number): DeviceInfo;
    clearProducesList(): void;
    getProducesList(): Array<DataType>;
    setProducesList(value: Array<DataType>): DeviceInfo;
    addProduces(value: DataType, index?: number): DataType;
    clearConsumesList(): void;
    getConsumesList(): Array<DataType>;
    setConsumesList(value: Array<DataType>): DeviceInfo;
    addConsumes(value: DataType, index?: number): DataType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceInfo.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceInfo;
    static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
    export type AsObject = {
        name: string,
        type: DeviceType,
        ip: string,
        port: number,
        producesList: Array<DataType>,
        consumesList: Array<DataType>,
    }
}

export class Coordinates extends jspb.Message { 
    getX(): number;
    setX(value: number): Coordinates;
    getY(): number;
    setY(value: number): Coordinates;
    getZ(): number;
    setZ(value: number): Coordinates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coordinates.AsObject;
    static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coordinates;
    static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
}

export namespace Coordinates {
    export type AsObject = {
        x: number,
        y: number,
        z: number,
    }
}

export class Quaternion extends jspb.Message { 
    getW(): number;
    setW(value: number): Quaternion;
    getX(): number;
    setX(value: number): Quaternion;
    getY(): number;
    setY(value: number): Quaternion;
    getZ(): number;
    setZ(value: number): Quaternion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quaternion.AsObject;
    static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quaternion;
    static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
    export type AsObject = {
        w: number,
        x: number,
        y: number,
        z: number,
    }
}

export class CatheterCoordinates extends jspb.Message { 

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): Coordinates | undefined;
    setPosition(value?: Coordinates): CatheterCoordinates;

    hasRotation(): boolean;
    clearRotation(): void;
    getRotation(): Quaternion | undefined;
    setRotation(value?: Quaternion): CatheterCoordinates;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatheterCoordinates.AsObject;
    static toObject(includeInstance: boolean, msg: CatheterCoordinates): CatheterCoordinates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatheterCoordinates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatheterCoordinates;
    static deserializeBinaryFromReader(message: CatheterCoordinates, reader: jspb.BinaryReader): CatheterCoordinates;
}

export namespace CatheterCoordinates {
    export type AsObject = {
        position?: Coordinates.AsObject,
        rotation?: Quaternion.AsObject,
    }
}

export class CatheterData extends jspb.Message { 
    getSensorid(): number;
    setSensorid(value: number): CatheterData;

    hasCoordinates(): boolean;
    clearCoordinates(): void;
    getCoordinates(): CatheterCoordinates | undefined;
    setCoordinates(value?: CatheterCoordinates): CatheterData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CatheterData.AsObject;
    static toObject(includeInstance: boolean, msg: CatheterData): CatheterData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CatheterData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CatheterData;
    static deserializeBinaryFromReader(message: CatheterData, reader: jspb.BinaryReader): CatheterData;
}

export namespace CatheterData {
    export type AsObject = {
        sensorid: number,
        coordinates?: CatheterCoordinates.AsObject,
    }
}

export class RobotControllerData extends jspb.Message { 
    getMovementvelocity(): number;
    setMovementvelocity(value: number): RobotControllerData;
    getRotationvelocity(): number;
    setRotationvelocity(value: number): RobotControllerData;
    getDeflectionvelocity(): number;
    setDeflectionvelocity(value: number): RobotControllerData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RobotControllerData.AsObject;
    static toObject(includeInstance: boolean, msg: RobotControllerData): RobotControllerData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RobotControllerData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RobotControllerData;
    static deserializeBinaryFromReader(message: RobotControllerData, reader: jspb.BinaryReader): RobotControllerData;
}

export namespace RobotControllerData {
    export type AsObject = {
        movementvelocity: number,
        rotationvelocity: number,
        deflectionvelocity: number,
    }
}

export class ElectricalSignalData extends jspb.Message { 
    getSignalid(): number;
    setSignalid(value: number): ElectricalSignalData;
    getValue(): number;
    setValue(value: number): ElectricalSignalData;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): ElectricalSignalData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElectricalSignalData.AsObject;
    static toObject(includeInstance: boolean, msg: ElectricalSignalData): ElectricalSignalData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElectricalSignalData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElectricalSignalData;
    static deserializeBinaryFromReader(message: ElectricalSignalData, reader: jspb.BinaryReader): ElectricalSignalData;
}

export namespace ElectricalSignalData {
    export type AsObject = {
        signalid: number,
        value: number,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Frame extends jspb.Message { 
    clearCatheterdataList(): void;
    getCatheterdataList(): Array<CatheterData>;
    setCatheterdataList(value: Array<CatheterData>): Frame;
    addCatheterdata(value?: CatheterData, index?: number): CatheterData;

    hasRobotcontrollerdata(): boolean;
    clearRobotcontrollerdata(): void;
    getRobotcontrollerdata(): RobotControllerData | undefined;
    setRobotcontrollerdata(value?: RobotControllerData): Frame;
    clearElectricalsignalsList(): void;
    getElectricalsignalsList(): Array<ElectricalSignalData>;
    setElectricalsignalsList(value: Array<ElectricalSignalData>): Frame;
    addElectricalsignals(value?: ElectricalSignalData, index?: number): ElectricalSignalData;

    hasCreated(): boolean;
    clearCreated(): void;
    getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Frame;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Frame.AsObject;
    static toObject(includeInstance: boolean, msg: Frame): Frame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Frame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Frame;
    static deserializeBinaryFromReader(message: Frame, reader: jspb.BinaryReader): Frame;
}

export namespace Frame {
    export type AsObject = {
        catheterdataList: Array<CatheterData.AsObject>,
        robotcontrollerdata?: RobotControllerData.AsObject,
        electricalsignalsList: Array<ElectricalSignalData.AsObject>,
        created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum DeviceType {
    ROBOT = 0,
    CONTROLLER = 1,
    CATHETER = 2,
    HEADSET = 3,
    ELECTRICALSIGNALGENERATOR = 4,
}

export enum DataType {
    ROBOTSTATE = 0,
    ROBOTCONTROLS = 1,
    CATHETERSENSORCOORDINATES = 2,
    ELECTRICALSIGNALS = 3,
}
