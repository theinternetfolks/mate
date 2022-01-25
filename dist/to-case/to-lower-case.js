"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_no_case_1 = require("./to-no-case");
/**
 * Convert a `string` to lower case from camel, slug, etc. Different that the
 * usual `toLowerCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */
function toLowerCase(string) {
    return (0, to_no_case_1.default)(string).toLowerCase();
}
exports.default = toLowerCase;
//# sourceMappingURL=to-lower-case.js.map