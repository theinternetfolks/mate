import clean from "./to-no-case";

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toSentenceCase(string) {
  return clean(string)
    .replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    })
    .trim();
}

export default toSentenceCase;
