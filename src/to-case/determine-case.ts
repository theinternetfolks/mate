import cases from "./cases";

/**
 * Determine the case of a `string`.
 *
 * @param {String} string
 * @return {String|Null}
 */

function determineCase(string) {
  for (var key in cases) {
    if (key == "none") continue;
    var convert = cases[key];
    if (convert(string) == string) return key;
  }
  return null;
}

export default determineCase;
