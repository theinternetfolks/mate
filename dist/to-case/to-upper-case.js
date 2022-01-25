"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_no_case_1 = require("./to-no-case");
/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */
function toUpperCase(string) {
    return (0, to_no_case_1.default)(string).toUpperCase();
}
exports.default = toUpperCase;
//# sourceMappingURL=to-upper-case.js.map