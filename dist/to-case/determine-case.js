"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cases_1 = require("./cases");
/**
 * Determine the case of a `string`.
 *
 * @param {String} string
 * @return {String|Null}
 */
function determineCase(string) {
    for (var key in cases_1.default) {
        if (key == "none")
            continue;
        var convert = cases_1.default[key];
        if (convert(string) == string)
            return key;
    }
    return null;
}
exports.default = determineCase;
//# sourceMappingURL=determine-case.js.map