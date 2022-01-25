"use strict";
/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */
Object.defineProperty(exports, "__esModule", { value: true });
function escapeRegex(str) {
    return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, "\\$1");
}
exports.default = escapeRegex;
//# sourceMappingURL=escape-regexp-component.js.map