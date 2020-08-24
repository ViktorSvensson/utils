/**
 * Get the file extension (i.e. .pdf, .txt, .json etc.) from an input
 * file path.
 *
 * @param absPath
 * @returns
 */

export function getExtension(absPath: string) {
  return absPath.match(/\.(\w+)$/i)[1].toLowerCase();
}
