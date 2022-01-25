import clean from "./to-no-case";

/**
 * Credits: @ianstormtaylor
 * @link {https://github.com/ianstormtaylor/to-space-case}
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string)
    .replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? " " + match : "";
    })
    .trim();
}

export default toSpaceCase;
