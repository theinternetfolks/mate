/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

function escapeRegex(str) {
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, "\\$1");
}

export default escapeRegex;
