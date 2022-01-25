import space from "./to-space-case";

/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */

function toDotCase(string) {
  return space(string).replace(/\s/g, ".");
}

export default toDotCase;
