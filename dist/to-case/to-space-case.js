"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_no_case_1 = require("./to-no-case");
/**
 * Credits: @ianstormtaylor
 * @link {https://github.com/ianstormtaylor/to-space-case}
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */
function toSpaceCase(string) {
    return (0, to_no_case_1.default)(string)
        .replace(/[\W_]+(.|$)/g, function (matches, match) {
        return match ? " " + match : "";
    })
        .trim();
}
exports.default = toSpaceCase;
//# sourceMappingURL=to-space-case.js.map