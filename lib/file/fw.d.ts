/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */
export declare function fw<T>(dirName: string, relativePath: string, content: T): string;
