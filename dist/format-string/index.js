"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape_regexp_component_1 = require("../libraries/escape-regexp-component");
function formatString(text, replacements, start, end) {
    if (!start)
        return text;
    if (typeof end === "undefined") {
        end = start.substring(start.length / 2);
        start = start.substring(0, start.length / 2);
    }
    if (start === end)
        return text;
    var startRegex = (0, escape_regexp_component_1.default)(start);
    var endRegex = (0, escape_regexp_component_1.default)(end);
    for (var arg in replacements) {
        text = text.replace(new RegExp(startRegex + arg + endRegex, "gi"), replacements[arg].toString());
    }
    return text;
}
exports.default = formatString;
//# sourceMappingURL=index.js.map