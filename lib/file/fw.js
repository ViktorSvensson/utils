"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const extension_1 = require("./extension");
/**
 * File writing (synchronous). Automatically converts objects to JSON if
 * the file is named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 * @param content File content to write.
 */
function fw(dirName, relativePath, content) {
    // resolve absolute path etc
    const absPath = path_1.resolve(dirName, relativePath);
    const format = extension_1.getExtension(absPath);
    // check current data type
    const dataType = typeof content;
    let buffer;
    switch (format) {
        // JSON is handled by parsing the file content
        case "json":
            buffer = dataType === "string" ? content : JSON.stringify(content);
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
    if (!fs_1.existsSync(path_1.resolve(absPath, ".."))) {
        fs_1.mkdirSync(path_1.resolve(absPath, ".."), { recursive: true });
    }
    fs_1.writeFileSync(absPath, buffer);
    return absPath;
}
exports.fw = fw;
