import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { getExtension } from "./extension";
/**
 * File reading (synchronous). Automatically decodes JSON if file is
 * named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 */

export function fr<T>(dirName: string, relativePath: string): T {
  const absPath = resolve(dirName, relativePath);
  if (!existsSync(absPath)) return undefined;
  const buffer: any = readFileSync(absPath).toString();
  const format = getExtension(absPath);
  switch (format) {
    case "json":
      return JSON.parse(buffer) as T;
    case "csv":
      return buffer as T;
    default:
      return buffer as T;
  }
}
