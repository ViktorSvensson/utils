"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Convert a string to/from the specified encoding.
 *
 * @export
 * @param input String to encode
 * @param from Input encoding
 * @param to Output encoding
 * @returns {string}
 */
function encode(input, from, to) {
    return new Buffer(input.toString(), from).toString(to);
}
exports.encode = encode;
/**
 * Converts input to base64.
 *
 * @param input
 * @returns
 */
function atob(input) {
    return encode(input, "ascii", "base64");
}
exports.atob = atob;
/**
 * Converts input from base64 to ascii.
 *
 * @param encoded
 * @param encoding
 * @returns {string}
 */
function btoa(buffer) {
    return encode(buffer, "base64", "ascii");
}
exports.btoa = btoa;
