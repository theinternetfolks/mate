"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape_regexp_component_1 = require("../libraries/escape-regexp-component");
function formatString(text, replacements, start, end) {
    if (!start && end)
        end = undefined;
    if (!start)
        start = "{}";
    if (typeof end === "undefined") {
        end = start.substring(start.length / 2);
        start = start.substring(0, start.length / 2);
    }
    if (start === end)
        return text;
    if (!start.replace(/\s/g, "").length || !end.replace(/\s/g, "").length) {
        throw new Error("You cannot only use whitespace as a separator. Please include a character for specifying separators better.");
    }
    var startRegex = (0, escape_regexp_component_1.default)(start);
    var endRegex = (0, escape_regexp_component_1.default)(end);
    for (var arg in replacements) {
        if (typeof replacements[arg] === "string" ||
            typeof replacements[arg] === "boolean" ||
            typeof replacements[arg] === "number") {
            text = text.replace(new RegExp(startRegex + arg + endRegex, "gi"), replacements[arg].toString());
        }
    }
    return text;
}
exports.default = formatString;
//# sourceMappingURL=index.js.map