import escape from "../libraries/escape-regexp-component";
import minors from "../libraries/title-case-minors";
import sentence from "./to-sentence-case";

/**
 * Matchers.
 */

var escaped = minors.map(escape);
var minorMatcher = new RegExp("[^^]\\b(" + escaped.join("|") + ")\\b", "ig");
var punctuationMatcher = /:\s*(\w)/g;

/**
 * Convert a `string` to title case.
 *
 * @param {String} string
 * @return {String}
 */

function toTitleCase(string) {
  return sentence(string)
    .replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
      return previous + letter.toUpperCase();
    })
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase();
    })
    .replace(punctuationMatcher, function (letter) {
      return letter.toUpperCase();
    });
}

export default toTitleCase;
