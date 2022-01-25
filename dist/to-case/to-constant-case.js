"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var to_snake_case_1 = require("./to-snake-case");
/**
 * Convert a `string` to constant case.
 *
 * @param {String} string
 * @return {String}
 */
function toConstantCase(string) {
    return (0, to_snake_case_1.default)(string).toUpperCase();
}
exports.default = toConstantCase;
//# sourceMappingURL=to-constant-case.js.map