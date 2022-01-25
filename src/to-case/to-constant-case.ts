import snake from "./to-snake-case";

/**
 * Convert a `string` to constant case.
 *
 * @param {String} string
 * @return {String}
 */

function toConstantCase(string) {
  return snake(string).toUpperCase();
}

export default toConstantCase;
