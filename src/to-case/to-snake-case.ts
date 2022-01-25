import toSpace from "./to-space-case";

/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */

function toSnakeCase(string) {
  return toSpace(string).replace(/\s/g, "_");
}

export default toSnakeCase;
