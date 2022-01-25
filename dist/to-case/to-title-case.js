"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape_regexp_component_1 = require("../libraries/escape-regexp-component");
var title_case_minors_1 = require("../libraries/title-case-minors");
var to_sentence_case_1 = require("./to-sentence-case");
/**
 * Matchers.
 */
var escaped = title_case_minors_1.default.map(escape_regexp_component_1.default);
var minorMatcher = new RegExp("[^^]\\b(" + escaped.join("|") + ")\\b", "ig");
var punctuationMatcher = /:\s*(\w)/g;
/**
 * Convert a `string` to title case.
 *
 * @param {String} string
 * @return {String}
 */
function toTitleCase(string) {
    return (0, to_sentence_case_1.default)(string)
        .replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
        return previous + letter.toUpperCase();
    })
        .replace(minorMatcher, function (minor) {
        return minor.toLowerCase();
    })
        .replace(punctuationMatcher, function (letter) {
        return letter.toUpperCase();
    });
}
exports.default = toTitleCase;
//# sourceMappingURL=to-title-case.js.map