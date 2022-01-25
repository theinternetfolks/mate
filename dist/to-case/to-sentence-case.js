"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_no_case_1 = require("./to-no-case");
/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */
function toSentenceCase(string) {
    return (0, to_no_case_1.default)(string)
        .replace(/[a-z]/i, function (letter) {
        return letter.toUpperCase();
    })
        .trim();
}
exports.default = toSentenceCase;
//# sourceMappingURL=to-sentence-case.js.map