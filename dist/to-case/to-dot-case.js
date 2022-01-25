"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_space_case_1 = require("./to-space-case");
/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */
function toDotCase(string) {
    return (0, to_space_case_1.default)(string).replace(/\s/g, ".");
}
exports.default = toDotCase;
//# sourceMappingURL=to-dot-case.js.map