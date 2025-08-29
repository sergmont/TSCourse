"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function process(val) {
    if (typeof val === 'object'
        && !!val
        && 'log' in val
        && typeof val.log === 'function') {
        val.log();
    }
}
//"unknown" forces the developer to add IF validations to recognize what it does explicitly, so that the result contains what is expected of it, without a doubt
// "unknown" is a bit like the opposite of "any" which allows anything, regardless if it is valid or not
//
//
//
//
// adding two admiration marks, checks if something is truthy, or "not falsey" = !!val
//# sourceMappingURL=unknown.js.map