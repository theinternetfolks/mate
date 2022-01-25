import space from "./to-space-case";

/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */

function toCapitalCase(string) {
  return space(string).replace(
    /(^|\s)(\w)/g,
    function (matches, previous, letter) {
      return previous + letter.toUpperCase();
    }
  );
}

export default toCapitalCase;
