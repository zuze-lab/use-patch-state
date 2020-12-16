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
exports.__esModule = true;
exports.usePatchState = exports.patch = void 0;
var react_1 = require("react");
var patch = function (state) { return function (s) { return (__assign(__assign({}, s), state)); }; };
exports.patch = patch;
var usePatchState = function (initial) {
    var _a = react_1.useState(initial), state = _a[0], setState = _a[1];
    return [state, react_1.useCallback(function (s) { return setState(exports.patch(s)); }, [])];
};
exports.usePatchState = usePatchState;
