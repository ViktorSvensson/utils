"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const extension_1 = require("./extension");
/**
 * File reading (synchronous). Automatically decodes JSON if file is
 * named `[anything].json`.
 *
 * @param dirName Working directory (i.e. output of __dirname)
 * @param relativePath Path relative to the working directory (`dirName`)
 */
function fr(dirName, relativePath) {
    const absPath = path_1.resolve(dirName, relativePath);
    if (!fs_1.existsSync(absPath))
        return undefined;
    const buffer = fs_1.readFileSync(absPath).toString();
    const format = extension_1.getExtension(absPath);
    switch (format) {
        case "json":
            return JSON.parse(buffer);
        case "csv":
            return buffer;
        default:
            return buffer;
    }
}
exports.fr = fr;
