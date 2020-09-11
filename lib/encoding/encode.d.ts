/// <reference types="node" />
/**
 * All encodings.
 *
 * @export
 * @interface Encoding
 */
export interface Encoding {
    base64: string;
    hex: string;
    ascii: string;
    utf8: string;
}
/**
 * Convert a string to/from the specified encoding.
 *
 * @export
 * @param input String to encode
 * @param from Input encoding
 * @param to Output encoding
 * @returns {string}
 */
export declare function encode(input: string | number | Buffer, from: keyof Encoding, to: keyof Encoding): string;
/**
 * Converts input to base64.
 *
 * @param input
 * @returns
 */
export declare function atob(input: string): string;
/**
 * Converts input from base64 to ascii.
 *
 * @param encoded
 * @param encoding
 * @returns {string}
 */
export declare function btoa(buffer: string): string;
