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
export function encode(
  input: string | number | Buffer,
  from: keyof Encoding,
  to: keyof Encoding
): string {
  return new Buffer(input.toString(), from).toString(to);
}

/**
 * Converts input to base64.
 *
 * @param input
 * @returns
 */
export function atob(input: string): string {
  return encode(input, "ascii", "base64");
}
/**
 * Converts input from base64 to ascii.
 *
 * @param encoded
 * @param encoding
 * @returns {string}
 */
export function btoa(buffer: string): string {
  return encode(buffer, "base64", "ascii");
}
