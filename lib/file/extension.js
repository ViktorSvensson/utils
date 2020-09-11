"use strict";
/**
 * Get the file extension (i.e. .pdf, .txt, .json etc.) from an input
 * file path.
 *
 * @param absPath
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getExtension(absPath) {
    return absPath.match(/\.(\w+)$/i)[1].toLowerCase();
}
exports.getExtension = getExtension;
