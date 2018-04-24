/// <reference types="node" />
import { Stats } from "fs";
import http from "http";
import https from "https";
import bigInt from "big-integer";

/**
 * A core implementation of an error.
 */
export class CoreError extends Error {
    /**
     * The domain of the error.
     */
    domain: string;
    /**
     * Additional details about the error.
     */
    additional?: {
        [id: string]: any;
    };
    /**
     * The inner error if there was one.
     */
    innerError?: Error;
    /**
     * Create an instance of CoreError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
    /**
     * Check if an object could be a CoreError.
     * @param obj The object to check if it is a CoreError.
     * @returns true If the tested object is a CoreError.
     */
    static isError(obj: any): obj is CoreError;
    /**
     * Format the error to a readable version.
     */
    format(): string;
}

/**
 * A network implementation of an error.
 */
export class NetworkError extends CoreError {
    /**
     * Create an instance of NetworkError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * A platform implementation of an error.
 */
export class PlatformError extends CoreError {
    /**
     * Create an instance of PlatformError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export abstract class FactoryBase<T> {
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name: string, typeConstructor: (...args: any[]) => T): void;
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name: string): void;
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    exists(name: string): boolean;
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */
    types(): string[];
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name: string, ...args: any[]): T;
}

/**
 * Factory to generate network clients.
 */
export class NetworkClientFactory extends FactoryBase<INetworkClient> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<INetworkClient>;
}

/**
 * Factory to generate rng service.
 */
export class PlatformCryptoFactory extends FactoryBase<IPlatformCrypto> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IPlatformCrypto>;
}

/**
 * Factory to generate rng service.
 */
export class RngServiceFactory extends FactoryBase<IRngService> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IRngService>;
}

/**
 * Array helper methods.
 */
export class ArrayHelper {
    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    static isArray(value: any): boolean;
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */
    static isTyped(value: any, type: Function): boolean;
}

/**
 * Handle errors as gracefully as possible.
 */
export class ErrorHelper {
    /**
     * Format an error object into something readable.
     * @param err The object to format.
     * @param includeStack Include the stack trace if there is one.
     * @returns Formatted version of the error object.
     */
    static format(err: any, includeStack: boolean): string;
}

/**
 * Json helper methods.
 */
export class JsonHelper {
    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    static stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
}

/**
 * Number helper methods.
 */
export class NumberHelper {
    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    static isInteger(value: any): value is Number;
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */
    static isNumber(value: any): value is Number;
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    static isFloatString(value: string): boolean;
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */
    static isIntegerString(value: string): boolean;
}

/**
 * String helper methods.
 */
export class StringHelper {
    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    static isString(value: any): value is string;
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */
    static isAscii(value: string): boolean;
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */
    static encodeNonASCII(value: string): string;
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */
    static decodeNonASCII(value: string): string;
}

/**
 * Object helper methods.
 */
export class ObjectHelper {
    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    static isEmpty(value: any): boolean;
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */
    static isObject(value: any): value is Object;
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */
    static isType(value: any, typeConstructor: Function): boolean;
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */
    static getClassName(object: any): string;
}

/**
 * Represents a class which can provide background tasks.
 * @interface
 */
export interface IBackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    create<T>(task: () => Promise<T>, delay: number): Promise<T>;
}

/**
 * Represents a class which can provide logging.
 * @interface
 */
export interface ILogger {
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message: string, ...args: any[]): void;
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message: string, ...args: any[]): void;
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message: string, ...args: any[]): void;
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message: string, ...args: any[]): void;
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message: string, err?: any, ...args: any[]): void;
}

/**
 * Represents a client for performing communication.
 * @interface
 */
export interface INetworkClient {
    /**
     * Get data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    get(additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<string>;
    /**
     * Post data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    post(data: string, additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<string>;
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    getJson<U>(additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<U>;
    /**
     * Post data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    postJson<T, U>(data: T, additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<U>;
}

/**
 * Represents the configuration for a network endpoint.
 * @interface
 */
export interface INetworkEndPoint {
    /**
     * The protocol to access the endpoint with.
     * @returns The protocol.
     */
    getProtocol(): NetworkProtocol;
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost(): string;
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort(): number;
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getRootPath(): string;
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri(): string;
}

/**
 * Represents an object that can perform crypto operations.
 * @interface
 */
export interface IPlatformCrypto {
    /**
     * Encrypt the given data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    encrypt(data: string): string;
    /**
     * Decrypt the given data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */
    decrypt(data: string): string;
    /**
     * Sign the given data.
     * @param data The data to sign.
     * @returns The signature.
     */
    sign(data: string): string;
    /**
     * Verify the given data with the signature.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */
    verify(data: string, signature: string): boolean;
}

/**
 * Represents a service to perform random number generation.
 * @interface
 */
export interface IRngService {
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    generate(length: number): Uint8Array;
}

/**
 * Represents a class which can provide the time.
 * @interface
 */
export interface ITimeService {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch(): number;
}

/**
 * Represents the protocols for communicating.
 */
export type NetworkProtocol = "http" | "https";

/**
 * Implementation of ILogger which sends to the this._loggingObject.
 */
export class ConsoleLogger implements ILogger {
    /**
     * Create and instance of the console logger.
     */
    constructor(loggingObject?: Console);
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message: string, ...args: any[]): void;
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message: string, ...args: any[]): void;
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message: string, ...args: any[]): void;
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message: string, ...args: any[]): void;
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message: string, err?: any, ...args: any[]): void;
}

/**
 * Implementation of ILogger which is silent.
 */
export class NullLogger implements ILogger {
    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    banner(message: string, ...args: any[]): void;
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    log(message: string, ...args: any[]): void;
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    info(message: string, ...args: any[]): void;
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    warning(message: string, ...args: any[]): void;
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */
    error(message: string, err?: any, ...args: any[]): void;
}

/**
 * Default implementation of a network endpoint.
 */
export class NetworkEndPoint implements INetworkEndPoint {
    /**
     * Create an instance of NetworkEndPoint.
     * @param protocol The protocol to access the endpoint with.
     * @param host The host name or ip of the endpoint.
     * @param port The port of the endpoint.
     * @param rootPath The path to the endpoint.
     */
    constructor(protocol: NetworkProtocol, host: string, port: number, rootPath?: string);
    /**
     * The protocol to access the endpoint with.
     * @returns The protocol.
     */
    getProtocol(): NetworkProtocol;
    /**
     * The host name or ip of the endpoint.
     * @returns The host.
     */
    getHost(): string;
    /**
     * The path to the endpoint.
     * @returns The path.
     */
    getRootPath(): string;
    /**
     * The port of the endpoint.
     * @returns The port.
     */
    getPort(): number;
    /**
     * The complete uri.
     * @returns The uri.
     */
    getUri(): string;
}

/**
 * Default implementation of background task service.
 */
export class BackgroundTaskService implements IBackgroundTaskService {
    /**
     * Create a background task.
     * @param task The task to run in the background.
     * @param delay The delay before running the task.
     */
    create<T>(task: () => Promise<T>, delay: number): Promise<T>;
}

/**
 * Represents a class which can provide the time.
 */
export class TimeService implements ITimeService {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch(): number;
}

/**
 * Trytes converter that converts to and from a string.
 */
export class AsciiTrytesConverter implements ITrytesConverter<string> {
    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value: string): Trytes;
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes: Trytes): string;
}

/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
export class ObjectTrytesConverter<T> implements ITrytesConverter<T> {
    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    to(value: T): Trytes;
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes: Trytes): T;
}

/**
 * A class for handling addresses.
 */
export class Address {
    /**
     * The length for a valid address without checksum (81).
     */
    static readonly LENGTH: number;
    /**
     * The length for an address checksum (9).
     */
    static readonly LENGTH_CHECKSUM: number;
    /**
     * The length for valid address with checksum (90).
     */
    static readonly LENGTH_WITH_CHECKSUM: number;
    /**
     * An empty hash all 9s.
     */
    static readonly EMPTY: Address;
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static fromTrytes(address: Trytes): Address;
    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    toTrytes(): Trytes;
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    toTrytesWithChecksum(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}

/**
 * Represents an enum for the address security values.
 */
export enum AddressSecurity {
    low = 1,
    medium = 2,
    high = 3,
}

/**
 * A class for handling bundles.
 */
export class Bundle {
    /**
     * The transactions that form the bundle.
     */
    transactions: Transaction[];
    /**
     * The include state for the items in the bundle, populated if required during getTransfers.
     */
    inclusionState: boolean;
    /**
     * Create a new instance of Bundle.
     */
    constructor();
    /**
     * Add new transactions to the bundle.
     * @param signatureMessageLength The number of transactions to add.
     * @param address The address for the transactions.
     * @param value The value for the first of the transactions.
     * @param tag The tag to include in the transactions.
     * @param timestamp The timestamp for the transactions.
     */
    addTransactions(signatureMessageLength: number, address: Address, value: number, tag: Tag, timestamp: number): void;
    /**
     * Add signature fragments to the bundle.
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */
    addSignatureMessageFragments(signatureMessageFragments: SignatureMessageFragment[]): void;
}

/**
 * A class for handling hashes.
 */
export class Hash {
    /**
     * The length for a valid hash (81).
     */
    static readonly LENGTH: number;
    /**
     * An empty hash all 9s.
     */
    static readonly EMPTY: Hash;
    /**
     * Create hash from trytes.
     * @param hash The trytes to create the hash from.
     * @returns An instance of Hash.
     */
    static fromTrytes(hash: Trytes): Hash;
    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}

/**
 * A class for handling inputs.
 */
export class Input {
    /**
     * The address used for a transfer input.
     */
    address: Address;
    /**
     * The security level of the address.
     */
    security: AddressSecurity;
    /**
     * The index of the address from the seed.
     */
    keyIndex: number;
    /**
     * The balance of the input.
     */
    balance: number;
    /**
     * Create instance of input from parameters.
     * @param address The address.
     * @param security The address security.
     * @param keyIndex The key index.
     * @param balance The balance of the address.
     * @returns New instance of Input.
     */
    static fromParams(address: Address, security: AddressSecurity, keyIndex: number, balance: number): Input;
}

/**
 * A class for handling signature message fragments.
 */
export class SignatureMessageFragment {
    /**
     * The length of a valid signature message fragment (2187)
     */
    static readonly LENGTH: number;
    /**
     * An empty signature message fragment all 9s.
     */
    static readonly EMPTY: SignatureMessageFragment;
    /**
     * Create signature fragment from trytes.
     * @param signatureMessageFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureMessageFragment.
     */
    static fromTrytes(signatureMessageFragment: Trytes): SignatureMessageFragment;
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}

/**
 * A class for handling tags.
 */
export class Tag {
    /**
     * The length of a valid tag (27).
     */
    static readonly LENGTH: number;
    /**
     * An empty tag all 9s.
     */
    static readonly EMPTY: Tag;
    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Tag.
     */
    static fromTrytes(tag: Trytes): Tag;
    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}

/**
 * A class for handling transactions.
 */
export class Transaction {
    /**
     * The length of a valid transaction (2673).
     */
    static readonly LENGTH: number;
    /**
     * The length of a valid check value (16).
     */
    static readonly CHECK_VALUE_LENGTH: number;
    /**
     * The check value for bundles all 9s.
     */
    static readonly CHECK_VALUE: string;
    /**
     * The signature message fragment for the transaction.
     */
    signatureMessageFragment: SignatureMessageFragment;
    /**
     * The address for the transaction.
     */
    address: Address;
    /**
     * The value for the transaction.
     */
    value: TryteNumber;
    /**
     * The obsolete tag for the transaction.
     */
    obsoleteTag: Tag;
    /**
     * The timestamp for the transaction.
     */
    timestamp: TryteNumber;
    /**
     * The current index for the transaction.
     */
    currentIndex: TryteNumber;
    /**
     * The last index for the transaction bundle.
     */
    lastIndex: TryteNumber;
    /**
     * The bundle hash for the transaction.
     */
    bundle: Hash;
    /**
     * The trunk transaction for the transaction.
     */
    trunkTransaction: Hash;
    /**
     * The branch transaction for the transaction.
     */
    branchTransaction: Hash;
    /**
     * The tag for the transaction.
     */
    tag: Tag;
    /**
     * The attachment timestamp for the transaction.
     */
    attachmentTimestamp: TryteNumber;
    /**
     * The attachment timestamp lower bound for the transaction.
     */
    attachmentTimestampLowerBound: TryteNumber;
    /**
     * The attachment timestamp upper bound for the transaction.
     */
    attachmentTimestampUpperBound: TryteNumber;
    /**
     * The nonce for the transaction.
     */
    nonce: Tag;
    /**
     * Create instance of transaction from parameters.
     * @param signatureMessageFragment The signature message fragment.
     * @param address The address.
     * @param value The value.
     * @param obsoleteTag Obsolete transaction tag.
     * @param timestamp The timestamp.
     * @param currentIndex The current index.
     * @param lastIndex The last index.
     * @param bundle The bundle.
     * @param trunkTransaction The trunk transaction.
     * @param branchTransaction The branch transaction.
     * @param tag The tag.
     * @param attachmentTimestamp The attachment timestamp.
     * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
     * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
     * @param nonce The nonce.
     * @returns New instance of transaction.
     */
    static fromParams(signatureMessageFragment: SignatureMessageFragment, address: Address, value: number, obsoleteTag: Tag, timestamp: number, currentIndex: number, lastIndex: number, bundle: Hash, trunkTransaction: Hash, branchTransaction: Hash, tag: Tag, attachmentTimestamp: number, attachmentTimestampLowerBound: number, attachmentTimestampUpperBound: number, nonce: Tag): Transaction;
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */
    static fromTrytes(trytes: Trytes): Transaction;
    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */
    toString(): string;
}

/**
 * A class for handling transfers.
 */
export class Transfer {
    /**
     * The address to send the transfer to.
     */
    address: Address;
    /**
     * The value to send.
     */
    value: number;
    /**
     * Message to include with the transfer.
     */
    message: Trytes;
    /**
     * Tag for the transfer.
     */
    tag: Tag;
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @returns New instance of Transfer.
     */
    static fromParams(address: Address, value: number, message: Trytes, tag: Tag): Transfer;
}

/**
 * A class for handling trits.
 */
export class Trits {
    /**
     * Create instance of trits from Int8Array array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromArray(value: Int8Array): Trits;
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumberArray(value: number[]): Trits;
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromTrytes(value: Trytes): Trits;
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumber(value: number): Trits;
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */
    static add(first: Trits, second: Trits): Trits;
    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    toArray(): Int8Array;
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */
    toNumberArray(): number[];
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */
    toTrytes(): Trytes;
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */
    toNumber(): number;
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */
    length(): number;
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */
    sub(start: number, length: number): Trits;
}

/**
 * A class for handling tryte number.
 */
export class TryteNumber {
    /**
     * Length of a number that uses 9 trytes.
     */
    static readonly LENGTH_9: number;
    /**
     * An empty 9 length tryte number.
     */
    static readonly EMPTY_9: TryteNumber;
    /**
     * Create tryte number from number.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromNumber(value: number, length?: number): TryteNumber;
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromTrytes(value: Trytes, length?: number): TryteNumber;
    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    toTrytes(): Trytes;
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    toNumber(): number;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */
    valueOf(): number;
}

/**
 * A class for handling trytes.
 */
export class Trytes {
    /**
     * All the characters that can be used in trytes.
     */
    static ALPHABET: string;
    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    static fromString(value: string, length?: number): Trytes;
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    static isValid(value: string, length?: number): boolean;
    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    toString(): string;
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */
    length(): number;
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */
    sub(start: number, length: number): Trytes;
}

/**
 * A data implementation of an error.
 */
export class DataError extends CoreError {
    /**
     * Create an instance of DataError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * Represents a converter which can convert to and from trytes.
 * @typeparam T The generic type for the conversion methods.
 * @interface
 */
export interface ITrytesConverter<T> {
    /**
     * Convert a value into trytes.
     * @param value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value: T): Trytes;
    /**
     * Convert a trytes into a value.
     * @param trytes to convert into value.
     * @returns The value converted from the trytes.
     */
    from(trytes: Trytes): T;
}

/**
 * Default implementation of an api client.
 */
export class ApiClient implements IApiClient {
    /**
     * Create an instance of ApiClient.
     * @param networkClient The network client to communicate through.
     * @param apiVersion The API version to send with the requests
     * @param additionalHeaders Extra headers to send with the requests.
     * @param logger Logger to send communication info to.
     */
    constructor(networkClient: INetworkClient, apiVersion?: string, additionalHeaders?: {
        [header: string]: string;
    }, logger?: ILogger);
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    getNodeInfo(): Promise<IGetNodeInfoResponse>;
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    getNeighbors(): Promise<IGetNeighborsResponse>;
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    addNeighbors(request: IAddNeighborsRequest): Promise<IAddNeighborsResponse>;
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    removeNeighbors(request: IRemoveNeighborsRequest): Promise<IRemoveNeighborsResponse>;
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    getTips(): Promise<IGetTipsResponse>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    findTransactions(request: IFindTransactionsRequest): Promise<IFindTransactionsResponse>;
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    getTrytes(request: IGetTrytesRequest): Promise<IGetTrytesResponse>;
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    getInclusionStates(request: IGetInclusionStatesRequest): Promise<IGetInclusionStatesResponse>;
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse>;
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    getTransactionsToApprove(request: IGetTransactionsToApproveRequest): Promise<IGetTransactionsToApproveResponse>;
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    attachToTangle(request: IAttachToTangleRequest): Promise<IAttachToTangleResponse>;
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    interruptAttachingToTangle(): Promise<ICommonResponse>;
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    broadcastTransactions(request: IBroadcastTransactionsRequest): Promise<ICommonResponse>;
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    storeTransactions(request: IStoreTransactionsRequest): Promise<ICommonResponse>;
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    getMissingTransactions(): Promise<IGetMissingTransactionsResponse>;
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    checkConsistency(request: ICheckConsistencyRequest): Promise<ICheckConsistencyResponse>;
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    wereAddressesSpentFrom(request: IWereAddressesSpentFromRequest): Promise<IWereAddressesSpentFromResponse>;
}

/**
 * An api implementation of an error.
 */
export class ApiError extends CoreError {
    /**
     * Create an instance of ApiError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * Represents a client for performing communication with a node api.
 * @interface
 */
export interface IApiClient {
    /**
     * Returns information about your node.
     * @returns Promise which resolves to the getNodeInfo response object or rejects with error.
     */
    getNodeInfo(): Promise<IGetNodeInfoResponse>;
    /**
     * Returns the set of neighbors you are connected with, as well as their activity count.
     * The activity counter is reset after restarting IRI.
     * @returns Promise which resolves to the getNeighbors response object or rejects with error.
     */
    getNeighbors(): Promise<IGetNeighborsResponse>;
    /**
     * Add a list of neighbors to your node. It should be noted that this is only temporary,
     * and the added neighbors will be removed from your set of neighbors after you relaunch IRI.
     * @returns Promise which resolves to the addNeighbors response object or rejects with error.
     */
    addNeighbors(request: IAddNeighborsRequest): Promise<IAddNeighborsResponse>;
    /**
     * Removes a list of neighbors from your node. This is only temporary, and if you have your
     * neighbors added via the command line, they will be retained after you restart your node.
     * @returns Promise which resolves to the removeNeighbors response object or rejects with error.
     */
    removeNeighbors(request: IRemoveNeighborsRequest): Promise<IRemoveNeighborsResponse>;
    /**
     * Returns the list of tips.
     * @returns Promise which resolves to the getTips response object or rejects with error.
     */
    getTips(): Promise<IGetTipsResponse>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves to the findTransactions response object or rejects with error.
     */
    findTransactions(request: IFindTransactionsRequest): Promise<IFindTransactionsResponse>;
    /**
     * Returns the raw transaction data (trytes) of a specific transaction.
     * These trytes can then be easily converted into the actual transaction object.
     * @returns Promise which resolves to the getTrytes response object or rejects with error.
     */
    getTrytes(request: IGetTrytesRequest): Promise<IGetTrytesResponse>;
    /**
     * Get the inclusion states of a set of transactions. This is for determining if a transaction
     * was accepted and confirmed by the network or not. You can search for multiple tips (and thus,
     * milestones) to get past inclusion states of transactions.
     * @returns Promise which resolves to the getInclusionStates response object or rejects with error.
     */
    getInclusionStates(request: IGetInclusionStatesRequest): Promise<IGetInclusionStatesResponse>;
    /**
     * Returns the confirmed balance which a list of addresses have at the latest confirmed milestone.
     * In addition to the balances, it also returns the milestone as well as the index with which the
     * confirmed balance was determined. The balances is returned as a list in the same order as the
     * addresses were provided as input.
     * @param request The getBalances request object.
     * @returns Promise which resolves to the getBalances response object or rejects with error.
     */
    getBalances(request: IGetBalancesRequest): Promise<IGetBalancesResponse>;
    /**
     * Tip selection which returns trunkTransaction and branchTransaction. The input value is depth,
     * which basically determines how many bundles to go back to for finding the transactions to approve.
     * The higher your depth value, the more "babysitting" you do for the network (as you have to confirm more transactions).
     * @param request The getTransactionsToApprove request object.
     * @returns Promise which resolves to the getTransactionsToApprove response object or rejects with error.
     */
    getTransactionsToApprove(request: IGetTransactionsToApproveRequest): Promise<IGetTransactionsToApproveResponse>;
    /**
     * Attaches the specified transactions (trytes) to the Tangle by doing Proof of Work. You need to supply
     * branchTransaction as well as trunkTransaction (basically the tips which you're going to validate and
     * reference with this transaction) - both of which you'll get through the getTransactionsToApprove API call.
     * @param request The attachToTangle request object.
     * @returns Promise which resolves to the attachToTangle response object or rejects with error.
     */
    attachToTangle(request: IAttachToTangleRequest): Promise<IAttachToTangleResponse>;
    /**
     * Interrupts and completely aborts the attachToTangle process
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    interruptAttachingToTangle(): Promise<ICommonResponse>;
    /**
     * Broadcast a list of transactions to all neighbors. The input trytes for this call are provided by attachToTangle.
     * @param request The broadcastTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    broadcastTransactions(request: IBroadcastTransactionsRequest): Promise<ICommonResponse>;
    /**
     * Store transactions into the local storage. The trytes to be used for this call are returned by attachToTangle.
     * @param request The storeTransactions request object.
     * @returns Promise which resolves with empty response object or rejects with error.
     */
    storeTransactions(request: IStoreTransactionsRequest): Promise<ICommonResponse>;
    /**
     * Get transactions with missing references.
     * @param request The getMissingTransactions request object.
     * @returns Promise which resolves to the getMissingTransactions response object or rejects with error.
     */
    getMissingTransactions(): Promise<IGetMissingTransactionsResponse>;
    /**
     * Check the consistency of tail hashes.
     * @param request The checkConsistency request object.
     * @returns Promise which resolves to the checkConsistency response object or rejects with error.
     */
    checkConsistency(request: ICheckConsistencyRequest): Promise<ICheckConsistencyResponse>;
    /**
     * Have the requested addresses been spent from already.
     * @param request The wereAddressesSpentFrom request object.
     * @returns Promise which resolves to the wereAddressesSpentFrom response object or rejects with error.
     */
    wereAddressesSpentFrom(request: IWereAddressesSpentFromRequest): Promise<IWereAddressesSpentFromResponse>;
}

/**
 * Represents the request for addNeighbors command.
 * @interface
 */
export interface IAddNeighborsRequest {
    /**
     * List of URI elements.
     */
    uris: string[];
}

/**
 * Represents the response from addNeighbors command.
 * @interface
 */
export interface IAddNeighborsResponse extends ICommonResponse {
    /**
     * The number of neighbours added.
     */
    addedNeighbors: number;
}

/**
 * Represents the request for attachToTangle command.
 * @interface
 */
export interface IAttachToTangleRequest {
    /**
     * Trunk transaction to approve.
     */
    trunkTransaction: string;
    /**
     * Branch transaction to approve.
     */
    branchTransaction: string;
    /**
     * Proof of Work intensity. Minimum value is 18
     */
    minWeightMagnitude: number;
    /**
     * List of trytes (raw transaction data) to attach to the tangle.
     */
    trytes: string[];
}

/**
 * Represents the response from attachToTangle command.
 * @interface
 */
export interface IAttachToTangleResponse extends ICommonResponse {
    /**
     * The returned tryte value, the last 243 trytes basically consist
     * of the: trunkTransaction + branchTransaction + nonce.
     */
    trytes: string[];
}

/**
 * Represents the request for broadcastTransactions command.
 * @interface
 */
export interface IBroadcastTransactionsRequest {
    /**
     * List of raw data of transactions to be rebroadcast.
     */
    trytes: string[];
}

/**
 * Represents the request for checkConsistency command.
 * @interface
 */
export interface ICheckConsistencyRequest {
    /**
     * The tail hashes to check for consistency.
     */
    tails: string[];
}

/**
 * Represents the response from checkConsistency command.
 * @interface
 */
export interface ICheckConsistencyResponse extends ICommonResponse {
    /**
     * Is the tail reference consistent.
     */
    state: boolean;
    /**
     * Is the tail reference consistent.
     */
    info: string;
}

/**
 * Represents the common response from all commands.
 * @interface
 */
export interface ICommonResponse {
    /**
     * The duration of the request.
     */
    duration: number;
}

/**
 * Represents the request for findTransactions command.
 * @interface
 */
export interface IFindTransactionsRequest {
    /**
     * List of bundle hashes. The hashes need to be extended to 81chars by padding the hash with 9's.
     */
    bundles?: string[];
    /**
     * List of addresses.
     */
    addresses?: string[];
    /**
     * List of transaction tags.
     */
    tags?: string[];
    /**
     * List of approvees of a transaction.
     */
    approvees?: string[];
}

/**
 * Represents the response from findTransactions command.
 * @interface
 */
export interface IFindTransactionsResponse extends ICommonResponse {
    /**
     * The transaction hashes which are returned depend on your input.
     * For each specified input value, the command will return the following:
     * bundles: returns the list of transactions which contain the specified bundle hash.
     * addresses: returns the list of transactions which have the specified address as an input/output field.
     * tags: returns the list of transactions which contain the specified tag value.
     * approvees: returns the list of transaction which reference (i.e. confirm) the specified transaction.
     */
    hashes: string[];
}

/**
 * Represents the request for getBalances command.
 * @interface
 */
export interface IGetBalancesRequest {
    /**
     * List of addresses you want to get the confirmed balance from.
     */
    addresses: string[];
    /**
     * Confirmation threshold, should be set to 100.
     */
    threshold: number;
}

/**
 * Represents the response from getBalances command.
 * @interface
 */
export interface IGetBalancesResponse extends ICommonResponse {
    /**
     * List of balances for the addresses.
     */
    balances: string[];
    /**
     * The milestone at which the balances were calculated.
     */
    milestone: string;
    /**
     * The milestone index at which the balances were calculated.
     */
    milestoneIndex: number;
}

/**
 * Represents the request for getInclusionStates command.
 * @interface
 */
export interface IGetInclusionStatesRequest {
    /**
     * List of transactions you want to get the inclusion state for.
     */
    transactions: string[];
    /**
     * List of tips (including milestones) you want to search for the inclusion state.
     */
    tips: string[];
}

/**
 * Represents the response from getInclusionStates command.
 * @interface
 */
export interface IGetInclusionStatesResponse extends ICommonResponse {
    /**
     * List of boolean values in the same order as the transaction list you submitted,
     * thus you get a true/false whether a transaction is confirmed or not.
     */
    states: boolean[];
}

/**
 * Represents the response from getMissingTransactions command.
 * @interface
 */
export interface IGetMissingTransactionsResponse extends ICommonResponse {
    /**
     * The transactions with missing references.
     */
    hashes: string[];
}

/**
 * Represents the response from getNeighbors command.
 * @interface
 */
export interface IGetNeighborsResponse extends ICommonResponse {
    /**
     * The neighbors of the node.
     */
    neighbors: INeighbor[];
}

/**
 * Represents the response from getNodeInfo command.
 * @interface
 */
export interface IGetNodeInfoResponse extends ICommonResponse {
    /**
     * Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).
     */
    appName: string;
    /**
     * The version of the IOTA software you're currently running.
     */
    appVersion: string;
    /**
     * Available cores on your machine for JRE.
     */
    jreAvailableProcessors: number;
    /**
     * The version of the Java Virtual Machine.
     */
    jreVersion: number;
    /**
     * Returns the amount of free memory in the Java Virtual Machine.
     */
    jreFreeMemory: number;
    /**
     * Returns the maximum amount of memory that the Java virtual machine will attempt to use.
     */
    jreMaxMemory: number;
    /**
     * Returns the total amount of memory in the Java virtual machine.
     */
    jreTotalMemory: number;
    /**
     * Latest milestone that was signed off by the coordinator.
     */
    latestMilestone: string;
    /**
     * Index of the latest milestone.
     */
    latestMilestoneIndex: number;
    /**
     * The latest milestone which is solid and is used for sending transactions. For a milestone to
     * become solid your local node must basically approve the subtangle of coordinator-approved
     * transactions, and have a consistent view of all referenced transactions.
     */
    latestSolidSubtangleMilestone: string;
    /**
     * Index of the latest solid subtangle.
     */
    latestSolidSubtangleMilestoneIndex: number;
    /**
     * Number of neighbors you are directly connected with.
     */
    neighbors: number;
    /**
     * Packets which are currently queued up.
     */
    packetsQueueSize: number;
    /**
     * Current UNIX timestamp.
     */
    time: number;
    /**
     * Number of tips in the network.
     */
    tips: number;
    /**
     * Transactions to request during syncing process.
     */
    transactionsToRequest: number;
}

/**
 * Represents the response from getTips command.
 * @interface
 */
export interface IGetTipsResponse extends ICommonResponse {
    /**
     * The hashes for the tips.
     */
    hashes: string[];
}

/**
 * Represents the request for getTransactionsToApprove command.
 * @interface
 */
export interface IGetTransactionsToApproveRequest {
    /**
     * Number of bundles to go back to determine the transactions for approval.
     */
    depth: number;
    /**
     * The reference to include in the lookup.
     */
    reference?: string;
    /**
     * The number of walks to perform.
     */
    numWalks?: number;
}

/**
 * Represents the response from getTransactionsToApprove command.
 * @interface
 */
export interface IGetTransactionsToApproveResponse extends ICommonResponse {
    /**
     * The trunk transaction.
     */
    trunkTransaction: string;
    /**
     * The branch transaction.
     */
    branchTransaction: string;
}

/**
 * Represents the request for getTrytes command.
 * @interface
 */
export interface IGetTrytesRequest {
    /**
     * List of transaction hashes of which you want to get trytes from.
     */
    hashes: string[];
}

/**
 * Represents the response from getTrytes command.
 * @interface
 */
export interface IGetTrytesResponse extends ICommonResponse {
    /**
     * Trytes of the requested hashes.
     */
    trytes: string[];
}

/**
 * Represents the a neighbor.
 * @interface
 */
export interface INeighbor {
    /**
     * The address of your peer.
     */
    address: string;
    /**
     * Number of all transactions sent (invalid, valid, already-seen).
     */
    numberOfAllTransactions: number;
    /**
     * Invalid transactions your peer has sent you.
     * These are transactions with invalid signatures or overall schema.
     */
    numberOfInvalidTransactions: number;
    /**
     * New transactions which were transmitted.
     */
    numberOfNewTransactions: number;
}

/**
 * Represents the request for removeNeighbors command.
 * @interface
 */
export interface IRemoveNeighborsRequest {
    /**
     * List of URI elements.
     */
    uris: string[];
}

/**
 * Represents the response from removeNeighbors command.
 * @interface
 */
export interface IRemoveNeighborsResponse extends ICommonResponse {
    /**
     * The number of neighbours removed.
     */
    removedNeighbors: number;
}

/**
 * Represents the request for storeTransactions command.
 * @interface
 */
export interface IStoreTransactionsRequest {
    /**
     * List of raw data of transactions to be stored.
     */
    trytes: string[];
}

/**
 * Represents the request for wereAddressesSpentFrom command.
 * @interface
 */
export interface IWereAddressesSpentFromRequest {
    /**
     * The address hashes to check if they were spent from.
     */
    addresses: string[];
}

/**
 * Represents the response from wereAddressesSpentFrom command.
 * @interface
 */
export interface IWereAddressesSpentFromResponse extends ICommonResponse {
    /**
     * States which are true if the corresponding input address was spent from.
     */
    states: boolean[];
}

/**
 * Sha3 implementation.
 */
export class Sha3 {
    static readonly KECCAK_PADDING: Uint32Array;
    /**
     * Create a new instance of SHA3.
     * @param bits The number of input bits.
     * @param padding The padding to use.
     * @param outputBits The number of output bits.
     */
    constructor(bits: number, padding: Uint32Array, outputBits: number);
    /**
     * Reset the digest.
     */
    reset(): void;
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */
    update(input: ArrayBuffer): void;
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */
    digest(): ArrayBuffer;
}

/**
 * A crypto implementation of an error.
 */
export class CryptoError extends CoreError {
    /**
     * Create an instance of CryptoError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * Factory to generate proof of work.
 */
export class ProofOfWorkFactory extends FactoryBase<IProofOfWork> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IProofOfWork>;
}

/**
 * Factory to generate sponges.
 */
export class SpongeFactory extends FactoryBase<ISponge> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<ISponge>;
}

/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */
export class ISS {
    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    static subseed(seed: Int8Array, index: number, spongeType?: string): Int8Array;
    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param length The security level to create the key.
     * @param spongeType The sponge type to use for operations.
     * @returns the key.
     */
    static key(seed: Hash, index: number, security: AddressSecurity, spongeType?: string): Int8Array;
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @param spongeType The sponge type to use for operations.
     * @returns The digests.
     */
    static digests(subseed: Int8Array, spongeType?: string): Int8Array;
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @param spongeType The sponge type to use for operations.
     * @returns the address trits.
     */
    static address(digests: Int8Array, spongeType?: string): Int8Array;
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest of the bundle and signature message fragment.
     */
    static digest(normalizedBundleFragment: Int8Array, signatureMessageFragment: Int8Array, spongeType?: string): Int8Array;
    /**
     * Get the digest for the subseed.
     * @param subseed The subseed to get the digest for.
     * @param security The security level.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest.
     */
    static subseedToDigest(subseed: Int8Array, security: AddressSecurity, spongeType?: string): Int8Array;
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns the normalized bundle.
     */
    static normalizedBundle(bundleHash: Hash, spongeType?: string): Int8Array;
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns True if the signature message fragment are signed by the expected address.
     */
    static validateSignatures(expectedAddress: Address, signatureMessageFragments: SignatureMessageFragment[], bundleHash: Hash, spongeType?: string): boolean;
    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @returns The signed fragment.
     */
    static signatureMessageFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array, spongeType?: string): Int8Array;
}

/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class BigIntegerHelper {
    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    static tritsToBigInteger(trits: Int8Array, offset: number, length: number): bigInt.BigInteger;
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */
    static bigIntegerToTrits(value: bigInt.BigInteger, trits: Int8Array, offset: number, length: number): void;
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */
    static bigIntegerToBytes(value: bigInt.BigInteger, destination: ArrayBuffer, offset: number): void;
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */
    static bytesToBigInteger(source: ArrayBuffer, offset: number, length: number): bigInt.BigInteger;
}

/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class TransactionHelper {
    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    static hash(transaction: Transaction): Hash;
}

/**
 * Represents an interface to proof of work.
 * @interface
 */
export interface IProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]>;
}

/**
 * Represents an interface to hash trits.
 * @interface
 */
export interface ISponge {
    /**
     * Get the constant for the spone.
     * @name The name of the contant to get.
     * @returns The constant.
     */
    getConstant(name: string): number;
    /**
     * Get the state.
     * @returns The state.
     */
    getState(): Int8Array;
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: Int8Array): void;
    /**
     * Reset the hasher.
     */
    reset(): void;
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits: Int8Array, offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Int8Array, offset: number, length: number): void;
}

/**
 * Base class for proof of work.
 */
export abstract class ProofOfWorkBase implements IProofOfWork {
    /**
     * The maximum timestamp value used in proof of work.
     */
    static readonly MAX_TIMESTAMP_VALUE: number;
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]>;
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    abstract singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}

/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */
export class Curl implements ISponge {
    static readonly HASH_LENGTH: number;
    static readonly NUMBER_OF_ROUNDS: number;
    static readonly STATE_LENGTH: number;
    /**
     * Create a new instance of Curl.
     * @param rounds The number of rounds to use.
     */
    constructor(rounds?: number);
    /**
     * Get the constant for the spone.
     * @name The name of the contant to get.
     * @returns The constant.
     */
    getConstant(name: string): number;
    /**
     * Get the state.
     * @returns The state.
     */
    getState(): Int8Array;
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: Int8Array): void;
    /**
     * Reset the hasher.
     */
    reset(): void;
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits: Int8Array, offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Int8Array, offset: number, length: number): void;
}

/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class Kerl implements ISponge {
    /**
     * Create a new instance of Kerl.
     */
    constructor();
    /**
     * Get the constant for the spone.
     * @name The name of the contant to get.
     * @returns The constant.
     */
    getConstant(name: string): number;
    /**
     * Get the state.
     * @returns The state.
     */
    getState(): Int8Array;
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: Int8Array): void;
    /**
     * Reset the hasher.
     */
    reset(): void;
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits: Int8Array, offset: number, length: number): void;
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Int8Array, offset: number, length: number): void;
}

/**
 * A business implementation of an error.
 */
export class BusinessError extends CoreError {
    /**
     * Create an instance of BusinessError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

export {};

/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class BundleHelper {
    static readonly NUMBER_OF_FRAGMENT_CHUNKS: number;
    /**
     * Is the bundle valid.
     * @param bundle The bundle to check for validity.
     * @returns True if the bundle is valid.
     */
    static isValid(bundle: Bundle): boolean;
    /**
     * Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated
     * transaction with the corresponding signatures of the co-signers is valid.
     * @param signedBundle The signed bundle to check the signatures.
     * @param inputAddress The address used to initiate the transfer.
     * @returns True is the signatures are valid.
     */
    static validateSignatures(signedBundle: Bundle, inputAddress: Address): boolean;
    /**
     * Prepare a bundle.
     * @param timeService To use for stamping the transactions.
     * @param transfers The transfers to add to the bundle.
     */
    static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle;
        totalValue: number;
        signatureMessageFragments: SignatureMessageFragment[];
        lastTag: Tag;
    };
    /**
     * Sign the input of the bundle.
     * @param seed The seed to use for signing.
     * @param bundle The bundle to sign.
     * @param transferOptions Additional transfer options.
     * @param signatureMessageFragments The signature message fragemtns.
     * @param inputs The input for use.
     * @param addedHMAC Has an HMAC been added.
     */
    static signInputs(seed: Hash, bundle: Bundle, transferOptions: TransferOptions, signatureMessageFragments: SignatureMessageFragment[], inputs: Input[], addedHMAC: boolean): void;
    /**
     * Sign the trsnactions
     * @param bundle The bundle of transactions to sign.
     * @param index The index to start.
     * @param firstUnsignedIndex The first unsigned index.
     * @param keyTrits The key trits.
     * @param addressTrytes The address trytes.
     * @param security The security level.
     */
    static signTransactions(bundle: Bundle, index: number, firstUnsignedIndex: number, keyTrits: Int8Array, addressTrytes: string, security: AddressSecurity): void;
    /**
     * Finalize a bundle.
     * @param bundle The bundle to finalize.
     */
    static finalizeBundle(bundle: Bundle): void;
}

/**
 * Represents a client for performing transactions using the api if required.
 * @interface
 */
export interface ITransactionClient {
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    getTransactionsInProgress(): Promise<Hash[]>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]>;
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    getTransactionsObjects(transactionHashes: Hash[]): Promise<Transaction[]>;
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]>;
    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getNewAddress(seed: Hash, startIndex?: number, endIndex?: number, includeChecksum?: boolean, security?: AddressSecurity): Promise<Address[]>;
    /**
     * Generates addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getAddressesByIndex(seed: Hash, startIndex: number, endIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;
    /**
     * Generates address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */
    getAddressesToUnused(seed: Hash, startIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;
    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */
    getInputs(seed: Hash, startIndex: number, endIndex: number, security: AddressSecurity, totalRequired: number): Promise<{
        inputs: Input[];
        totalBalance: number;
    }>;
    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @returns Promise which resolves to the array of Transactions for the transfer or rejects with error.
     */
    prepareTransfers(seed: Hash, transfers: Transfer[], transferOptions?: TransferOptions): Promise<Bundle>;
    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param bundle The bundle of transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    attachToTangle(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle>;
    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param bundle The bundle of transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    sendTransactions(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle>;
    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    sendTransfer(seed: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], transferOptions?: TransferOptions, reference?: Hash): Promise<Bundle>;
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    isPromotable(transactionTail: Hash): Promise<boolean>;
    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */
    isReattachable(addresses: Address[]): Promise<boolean[]>;
    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    promoteTransaction(transactionTail: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], promoteOptions?: PromoteOptions): Promise<Bundle>;
    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    getBundle(transactionHash: Hash): Promise<Bundle>;
    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    traverseBundle(trunkTransaction: Hash, bundleHash?: Hash): Promise<Transaction[]>;
    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    reattachBundle(transactionHash: Hash, depth: number, minWeightMagnitude: number): Promise<Bundle>;
    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */
    rebroadcastBundle(transactionHash: Hash): Promise<Bundle>;
    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param addresses The addresses to get the transaction objects for.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */
    findTransactionObjects(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Transaction[]>;
    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */
    getTransfers(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity, inclusionStates?: boolean): Promise<Bundle[]>;
    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */
    getAccountData(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity): Promise<AccountData>;
}

/**
 * Address using multiple signatures.
 */
export class MultiSigAddress {
    /**
     * Create a new instance of the MultiSigAddress.
     */
    constructor();
    /**
     * Absorb key digests.
     * @param digests The digests hashes to absorb.
     */
    absorb(digests: Trytes[]): void;
    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */
    finalize(digests?: Trytes[]): Address;
}

/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */
export class MultiSigClient {
    /**
     * Create a new instance of the MultiSigClient.
     * @param apiClient An API Client to communicate through.
     * @param timeService A class which can provide the time.
     */
    constructor(apiClient: IApiClient, timeService?: ITimeService);
    /**
     * Get the key value of a seed.
     * @param seed The seed to get the key for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the key.
     */
    static getKey(seed: Hash, index: number, security: AddressSecurity): Trytes;
    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */
    static getDigest(seed: Hash, index: number, security: AddressSecurity): Trytes;
    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */
    static validateAddress(address: Address, digests: Trytes[]): boolean;
    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */
    static addSignature(bundle: Bundle, address: Address, key: Trytes): void;
    /**
     * Initiates the creation of a new transfer by generating an empty bundle with the correct number
     * of bundle entries to be later used for the signing process.
     * @param address Address which has sufficient balance and is controlled by the co-signers.
     * @param securitySum the sum of the security levels from all cosigners chosen during the private key generation (getKey / getDigest)
     * @param balance The balance available for the transfer, if 0 will call getBalances to lookup available.
     * @param transfers The transfers to perform.
     * @param remainderAddress If there is a remainder after the transfer then send the amount to this address.
     */
    prepareTransfer(address: Address, securitySum: number, balance: number, transfers: Transfer[], remainderAddress?: Address): Promise<Bundle>;
}

/**
 * Hashed Message Authentication Code using Curl.
 */
export class HmacCurl {
    /**
     * Create a new instance of the HmacCurl.
     * @param key The key to seed with.
     */
    constructor(key: Trytes);
    /**
     * Add bundle to the HMAC.
     */
    addHMAC(bundle: Bundle): void;
}

/**
 * Default implementation of the ITransactionClient.
 */
export class TransactionClient implements ITransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param proofOfWork Proof of work module to use, if undefined will use remote.
     * @param timeService A class which can provide the time.
     * @param backgroundTaskService A class which can provide background tasks.
     * @param logger Logger to send transaction info to.
     */
    constructor(apiClient: IApiClient, proofOfWork?: IProofOfWork, timeService?: ITimeService, backgroundTaskService?: IBackgroundTaskService, logger?: ILogger);
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    getTransactionsInProgress(): Promise<Hash[]>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]>;
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    getTransactionsObjects(transactionHashes: Hash[]): Promise<Transaction[]>;
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]>;
    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getNewAddress(seed: Hash, startIndex?: number, endIndex?: number, includeChecksum?: boolean, security?: AddressSecurity): Promise<Address[]>;
    /**
     * Generates new addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getAddressesByIndex(seed: Hash, startIndex: number, endIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;
    /**
     * Generates new address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */
    getAddressesToUnused(seed: Hash, startIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;
    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */
    getInputs(seed: Hash, startIndex: number, endIndex: number, security: AddressSecurity, totalRequired: number): Promise<{
        inputs: Input[];
        totalBalance: number;
    }>;
    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     *      @property reference The transaction to reference.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */
    prepareTransfers(seed: Hash, transfers: Transfer[], transferOptions?: TransferOptions): Promise<Bundle>;
    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param bundle The bundle of transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    attachToTangle(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle>;
    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param bundle The bundle of transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    sendTransactions(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle>;
    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    sendTransfer(seed: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], transferOptions?: TransferOptions, reference?: Hash): Promise<Bundle>;
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    isPromotable(transactionTail: Hash): Promise<boolean>;
    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */
    isReattachable(addresses: Address[]): Promise<boolean[]>;
    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    promoteTransaction(transactionTail: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], promoteOptions?: PromoteOptions): Promise<Bundle>;
    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    getBundle(transactionHash: Hash): Promise<Bundle>;
    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    traverseBundle(trunkTransaction: Hash, bundleHash?: Hash): Promise<Transaction[]>;
    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    reattachBundle(transactionHash: Hash, depth: number, minWeightMagnitude: number): Promise<Bundle>;
    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */
    rebroadcastBundle(transactionHash: Hash): Promise<Bundle>;
    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */
    findTransactionObjects(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Transaction[]>;
    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */
    getTransfers(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity, inclusionStates?: boolean): Promise<Bundle[]>;
    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */
    getAccountData(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity): Promise<AccountData>;
}

/**
 * Account data information returned from getAccountData.
 */
export type AccountData = {
    latestAddress: Address;
    addresses: Address[];
    transfers: Bundle[];
    inputs: Input[];
    balance: number;
};

/**
 * Options used during promote process in promoteTransaction.
 */
export type PromoteOptions = {
    delay?: number;
    interrupt?: boolean | (() => boolean);
};

/**
 * Options used during prepare transfer process prepareTransfers and sendTransfer.
 */
export type TransferOptions = {
    inputs?: Input[];
    security?: AddressSecurity;
    remainderAddress?: Address;
    hmacKey?: Trytes;
};

/**
 * Represents a data table config provider which uses and IConfigProvider.
 */
export class DataTableConfigProvider implements IDataTableConfigProvider {
    /**
     * Create a new instance of the DataTableConfigProvider.
     * @param configProvider The config provider to use.
     * @param logger Logger to send info to.
     */
    constructor(configProvider: IConfigProvider, logger?: ILogger);
    /**
     * Load the configuration for the data table.
     * @param tableName The table to load the configuration for.
     * @returns The configuration.
     */
    load(tableName: string): Promise<IDataTableConfig>;
    /**
     * Save the configuration for the data table.
     * @param tableName The table to save the configuration for.
     * @param config The configuration to set.
     */
    save(tableName: string, config: IDataTableConfig): Promise<void>;
}

/**
 * Represents a config provider which uses google storage.
 */
export class GoogleStorageConfigProvider implements IConfigProvider {
    /**
     * Create a new instance of the GoogleStorageConfigProvider.
     * @param bucketName The name of the bucket object.
     * @param configName The name of the configuration object.
     * @param serviceAccountKey The key to acccess the google api.
     * @param logger Logger to send info to.
     */
    constructor(bucketName: string, configName: string, serviceAccountKey?: IGoogleServiceAccountKey, logger?: ILogger);
    /**
     * Load the configuration for the data table.
     * @returns The configuration.
     */
    load<T>(): Promise<T>;
    /**
     * Save the configuration for the data table.
     * @param config The configuration to set.
     */
    save<T>(config: T): Promise<void>;
}

/**
 * Represents a table for storing data.
 */
export class DataTable<T> implements IDataTable<T> {
    /**
     * Create a new instance of the DataTable.
     * @param storageClient A storage client to perform storage operations.
     * @param configProvider A provider to get the configuration for the table.
     * @param tableName The name of the table.
     * @param logger Logger to send storage info to.
     */
    constructor(storageClient: IStorageClient, configProvider: IDataTableConfigProvider, tableName: string, logger?: ILogger);
    /**
     * Get the index for the table.
     * @returns The table index.
     */
    index(): Promise<DataTableIndex>;
    /**
     * Store an item of data in the table.
     * @param data The data to store.
     * @param tag The tag to store with the item.
     * @returns The id of the stored item.
     */
    store(data: T, tag?: Tag): Promise<Hash>;
    /**
     * Update an item of data in the table.
     * @param originalId The id of the item to update.
     * @param data The data to update.
     * @param tag The tag to store with the item.
     * @returns The id of the updated item.
     */
    update(originalId: Hash, data: T, tag?: Tag): Promise<Hash>;
    /**
     * Retrieve all the data stored in the table.
     * @param ids Ids of all the items to retrieve, if empty will retrieve all items from index.
     * @returns The items stored in the table.
     */
    retrieve(ids?: Hash[]): Promise<T[]>;
    /**
     * Remove an item of data from the table.
     * @param id The id of the item to remove.
     */
    remove(id: Hash): Promise<void>;
}

/**
 * Represents a table for storing data with signing.
 */
export class SignedDataTable<T> implements IDataTable<T> {
    /**
     * Create a new instance of the DataTable.
     * @param storageClient A storage client to perform storage operations.
     * @param configProvider A provider to get the configuration for the table.
     * @param tableName The name of the table.
     * @param platformCrypto The object to use for platform crypto functions.
     * @param logger Logger to send storage info to.
     */
    constructor(storageClient: IStorageClient, configProvider: IDataTableConfigProvider, tableName: string, platformCrypto: IPlatformCrypto, logger?: ILogger);
    /**
     * Get the index for the table.
     * @returns The table index.
     */
    index(): Promise<DataTableIndex>;
    /**
     * Store an item of data in the table.
     * @param data The data to store.
     * @param tag The tag to store with the item.
     * @returns The id of the stored item.
     */
    store(data: T, tag?: Tag): Promise<Hash>;
    /**
     * Update an item of data in the table.
     * @param originalId The id of the item to update.
     * @param data The data to update.
     * @param tag The tag to store with the item.
     * @returns The id of the updated item.
     */
    update(originalId: Hash, data: T, tag?: Tag): Promise<Hash>;
    /**
     * Retrieve all the data stored in the table.
     * @param ids Ids of all the items to retrieve, if empty will retrieve all items from index.
     * @returns The items stored in the table.
     */
    retrieve(ids?: Hash[]): Promise<T[]>;
    /**
     * Remove an item of data from the table.
     * @param id The id of the item to remove.
     */
    remove(id: Hash): Promise<void>;
}

/**
 * A storage implementation of an error.
 */
export class StorageError extends CoreError {
    /**
     * Create an instance of StorageError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}

/**
 * Represents a table index for storing data.
 */
export type DataTableIndex = string[];

/**
 * Represents a class that can get/set configuration.
 * @interface
 */
export interface IConfigProvider {
    /**
     * Load the configuration.
     * @returns The configuration.
     */
    load<T>(): Promise<T>;
    /**
     * Save the configuration.
     * @param config The configuration to set.
     */
    save<T>(config: T): Promise<void>;
}

/**
 * Represents a table for storing data.
 * @interface
 */
export interface IDataTable<T> {
    /**
     * Get the index address for the table.
     * @returns The table index.
     */
    index(): Promise<DataTableIndex>;
    /**
     * Store an item of data in the table.
     * @param data The data to store.
     * @param tag The tag to store with the item.
     * @returns The id of the stored item.
     */
    store(data: T, tag?: Tag): Promise<Hash>;
    /**
     * Update an item of data in the table.
     * @param originalId The id of the item to update.
     * @param data The data to update.
     * @param tag The tag to store with the item.
     * @returns The id of the updated item.
     */
    update(originalId: Hash, data: T, tag?: Tag): Promise<Hash>;
    /**
     * Retrieve all the data stored in the table.
     * @param ids Ids of all the items to retrieve, if empty will retrieve all items from index.
     * @returns The items stored in the table.
     */
    retrieve(ids?: Hash[]): Promise<T[]>;
    /**
     * Remove an item of data from the table.
     * @param id The id of the item to remove.
     */
    remove(id: Hash): Promise<void>;
}

/**
 * Represents the configuration required by data table.
 * @interface
 */
export interface IDataTableConfig {
    indexBundleHash?: string;
    indexAddress: string;
    dataAddress: string;
}

/**
 * Represents the configuration required by data tables.
 * @interface
 */
export interface IDataTableConfigCollection {
    [tableName: string]: IDataTableConfig;
}

/**
 * Represents a class that can get/set data table configuration.
 * @interface
 */
export interface IDataTableConfigProvider {
    /**
     * Load the configuration for the data table.
     * @param tableName The table to load the configuration for.
     * @returns The configuration.
     */
    load(tableName: string): Promise<IDataTableConfig>;
    /**
     * Save the configuration for the data table.
     * @param tableName The table to save the configuration for.
     * @param config The configuration to set.
     */
    save(tableName: string, config: IDataTableConfig): Promise<void>;
}

/**
 * Represents the configuration for google service account.
 */
export interface IGoogleServiceAccountKey {
    "type": string;
    "project_id": string;
    "private_key_id": string;
    "private_key": string;
    "client_email": string;
    "client_id": string;
    "auth_uri": string;
    "token_uri": string;
    "auth_provider_x509_cert_url": string;
    "client_x509_cert_url": string;
}

/**
 * Represents an item of data stored with a signature.
 * @interface
 */
export interface ISignedItem<T> {
    data: T;
    timestamp: number;
    signature: string;
}

/**
 * Represents a client for performing storage operations.
 * @interface
 */
export interface IStorageClient {
    /**
     * Save an item of data on the address.
     * @param address The address to store the item.
     * @param data The data to store.
     * @param tag Tag to label the data with.
     * @returns The id of the item saved.
     */
    save(address: Address, data: Trytes, tag?: Tag): Promise<StorageItem>;
    /**
     * Load the data stored with the given bundle hash ids.
     * @param ids The ids of the items to load.
     * @returns The items stored at the hashes.
     */
    load(ids: Hash[]): Promise<StorageItem[]>;
}

/**
 * Default implementation of the StorageClient.
 */
export class StorageClient implements IStorageClient {
    /**
     * Create a new instance of the StorageClient.
     * @param transactionClient A transaction client to perform tangle operations.
     * @param logger Logger to send storage info to.
     */
    constructor(transactionClient: ITransactionClient, logger?: ILogger);
    /**
     * Save an item of data on the address.
     * @param address The address to store the item.
     * @param data The data to store.
     * @param tag Tag to label the data with.
     * @returns The id of the item saved.
     */
    save(address: Address, data: Trytes, tag?: Tag): Promise<StorageItem>;
    /**
     * Load the data stored with the given bundle hash ids.
     * @param ids The ids of the items to load.
     * @returns The items stored at the hashes.
     */
    load(ids: Hash[]): Promise<StorageItem[]>;
}

/**
 * Class to maintain an item stored on the tangle.
 */
export class StorageItem {
    id: Hash;
    data: Trytes;
    tag: Tag;
    attachmentTimestamp: number;
    bundleHash: Hash;
    transactionHashes: Hash[];
    constructor(id: Hash, data: Trytes, tag: Tag, attachmentTimestamp: number, bundleHash: Hash, transactionHashes: Hash[]);
}

/**
 * Platform abstraction layer for NodeJS.
 */
export class PAL {
    /**
     * Perform any initialization for the PAL.
     */
    static initialize(): Promise<void>;
}

/**
 * Implementation of a platform crypto for use in NodeJS.
 */
export class PlatformCrypto implements IPlatformCrypto {
    /**
     * Create a new instance of PlatformCrypto.
     * @param publicKey The key to use for decoding data.
     * @param privateKey The key to use for encoding data.
     */
    constructor(publicKey: string, privateKey?: string);
    /**
     * Encrypt the given data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    encrypt(data: string): string;
    /**
     * Decrypt the given data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */
    decrypt(data: string): string;
    /**
     * Sign the given data.
     * @param data The data to sign.
     * @returns The signature.
     */
    sign(data: string): string;
    /**
     * Verify the given data.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */
    verify(data: string, signature: string): boolean;
}

/**
 * Implementation of a node client for use in NodeJS.
 */
export class NetworkClient implements INetworkClient {
    /**
     * Create an instance of NetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     * @param logger Logger to send communication info to.
     * @param timeoutMs The timeout in ms before aborting.
     */
    constructor(networkEndPoint: INetworkEndPoint, logger?: ILogger, timeoutMs?: number, httpClientRequest?: (options: http.RequestOptions | https.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest);
    /**
     * Get data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    get(additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<string>;
    /**
     * Post data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    post(data: string, additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<string>;
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    getJson<U>(additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<U>;
    /**
     * Post data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    postJson<T, U>(data: T, additionalPath?: string, additionalHeaders?: {
        [header: string]: string;
    }): Promise<U>;
}

/**
 * Implementation of random number generation service.
 */
export class RngService implements IRngService {
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    generate(length: number): Uint8Array;
}

/**
 * ProofOfWork implementation using Remote PowBox.
 */
export class ProofOfWorkBox implements IProofOfWork {
    /**
     * Create an instance of ProofOfWork.
     * @param networkClient The network client to communicate through.
     * @param apiKey The API key to access the pow box.
     * @param pollIntervalMs The polling time to check for completion.
     */
    constructor(networkClient: INetworkClient, apiKey: string, pollIntervalMs?: number);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]>;
}

/**
 * ProofOfWork implementation using JavaScript.
 */
export class ProofOfWorkJs extends ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService);
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}

/**
 * ProofOfWork implementation using NodeJS.
 */
export class ProofOfWorkNodeJs extends ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param nodePlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(nodePlatform?: INodePlatform, timeService?: ITimeService);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}

/**
 * INodePlatform interface.
 */
export interface INodePlatform {
    pathResolve(path: string): string;
    pathJoin(...args: any[]): string;
    platform(): string;
    lstat(path: string, callback: (err: NodeJS.ErrnoException, stats: Stats) => void): void;
    loadLibrary(filename: string, functions: any): any;
}

/**
 * ProofOfWork implementation using WebAssembly.
 */
export class ProofOfWorkWasm extends ProofOfWorkBase {
    /**
     * Create a new instance of ProofOfWork.
     * @param webPlatform Provides platform specific functions, optional mostly used for testing.
     * @param timeService Service to get the time for attachments.
     */
    constructor(webPlatform?: IWebPlatform, timeService?: ITimeService);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}

/**
 * IWebPlatform interface.
 */
export interface IWebPlatform {
    webAssemblyType: string;
    wasmModuleLoader(module: any): void;
}

