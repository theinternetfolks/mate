"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_space_case_1 = require("./to-space-case");
/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */
function toCamelCase(string) {
    return (0, to_space_case_1.default)(string).replace(/\s(\w)/g, function (matches, letter) {
        return letter.toUpperCase();
    });
}
exports.default = toCamelCase;
//# sourceMappingURL=to-camel-case.js.map