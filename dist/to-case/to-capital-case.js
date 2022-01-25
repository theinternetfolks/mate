"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_space_case_1 = require("./to-space-case");
/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */
function toCapitalCase(string) {
    return (0, to_space_case_1.default)(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
        return previous + letter.toUpperCase();
    });
}
exports.default = toCapitalCase;
//# sourceMappingURL=to-capital-case.js.map