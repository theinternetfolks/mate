"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_space_case_1 = require("./to-space-case");
/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */
function toSnakeCase(string) {
    return (0, to_space_case_1.default)(string).replace(/\s/g, "_");
}
exports.default = toSnakeCase;
//# sourceMappingURL=to-snake-case.js.map