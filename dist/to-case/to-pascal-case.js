"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_space_case_1 = require("./to-space-case");
/**
 * Convert a `string` to pascal case.
 *
 * @param {String} string
 * @return {String}
 */
function toPascalCase(string) {
    return (0, to_space_case_1.default)(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
        return letter.toUpperCase();
    });
}
exports.default = toPascalCase;
//# sourceMappingURL=to-pascal-case.js.map