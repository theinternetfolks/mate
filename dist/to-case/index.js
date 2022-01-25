"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cases_1 = require("./cases");
var determine_case_1 = require("./determine-case");
var to = __assign(__assign({}, cases_1.default), { case: determine_case_1.default });
exports.default = to;
//# sourceMappingURL=index.js.map