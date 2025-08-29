"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateError(msg) {
    throw new Error(msg);
}
generateError();
// NULLISH COAELESCING
let input5 = '';
const didProvideInput = input5 || false;
// the OR OPERATOR  which is  ||, given the right side has an added "false" then it will check if the left element is not "falsey"
//
let input6 = '';
const didProvideInput2 = input6 ?? false;
// the ?? operator will only check if the left side is null or undefined. It will not look for falsy values or other things, and the value on the right, will be assigned to the const, given it IS null or undefined
//# sourceMappingURL=optional.js.map