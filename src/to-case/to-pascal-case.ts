import space from "./to-space-case";

/**
 * Convert a `string` to pascal case.
 *
 * @param {String} string
 * @return {String}
 */

function toPascalCase(string) {
  return space(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}

export default toPascalCase;
