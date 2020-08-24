import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { getExtension } from "./extension";
/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */

export function fw<T>(
  dirName: string,
  relativePath: string,
  content: T
): string {
  // resolve absolute path etc
  const absPath = resolve(dirName, relativePath);
  const format = getExtension(absPath);
  // check current data type
  const dataType = typeof content;
  let buffer: any;
  switch (format) {
    // JSON is handled by parsing the file content
    case "json":
      buffer = dataType === "string" ? (content as T) : JSON.stringify(content);
      break;
    // If not JSON, fallback to obj.toString()
    default:
      buffer = content.toString();
      break;
  }
  // Throw exception if we did not manage to convert the
  // input data to string
  if (typeof buffer !== "string") {
    throw new Error(`Could not convert file content to string.`);
  }
  // Check if parent directory exists, and create it if not
  if (!existsSync(resolve(absPath, ".."))) {
    mkdirSync(resolve(absPath, ".."), { recursive: true });
  }
  writeFileSync(absPath, buffer);
  return absPath;
}
