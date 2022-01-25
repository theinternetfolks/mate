"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mate = void 0;
var to_camel_case_1 = require("./to-case/to-camel-case");
var to_capital_case_1 = require("./to-case/to-capital-case");
var to_constant_case_1 = require("./to-case/to-constant-case");
var to_dot_case_1 = require("./to-case/to-dot-case");
var to_invert_case_1 = require("./to-case/to-invert-case");
var to_lower_case_1 = require("./to-case/to-lower-case");
var to_no_case_1 = require("./to-case/to-no-case");
var to_pascal_case_1 = require("./to-case/to-pascal-case");
var to_sentence_case_1 = require("./to-case/to-sentence-case");
var to_slug_case_1 = require("./to-case/to-slug-case");
var to_snake_case_1 = require("./to-case/to-snake-case");
var to_space_case_1 = require("./to-case/to-space-case");
var to_title_case_1 = require("./to-case/to-title-case");
var to_upper_case_1 = require("./to-case/to-upper-case");
var get_case_1 = require("./to-case/get-case");
var format_string_1 = require("./format-string");
exports.Mate = {
    toCamel: to_camel_case_1.default,
    toCapital: to_capital_case_1.default,
    toConstant: to_constant_case_1.default,
    toDot: to_dot_case_1.default,
    toInverse: to_invert_case_1.default,
    toLower: to_lower_case_1.default,
    toNone: to_no_case_1.default,
    toPascal: to_pascal_case_1.default,
    toSentence: to_sentence_case_1.default,
    toSlug: to_slug_case_1.default,
    toSnake: to_snake_case_1.default,
    toSpace: to_space_case_1.default,
    toTitle: to_title_case_1.default,
    toUpper: to_upper_case_1.default,
    getCase: get_case_1.default,
    format: format_string_1.default,
};
//# sourceMappingURL=index.js.map