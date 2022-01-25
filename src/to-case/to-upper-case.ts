import none from "./to-no-case";

/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

function toUpperCase(string) {
  return none(string).toUpperCase();
}

export default toUpperCase;
