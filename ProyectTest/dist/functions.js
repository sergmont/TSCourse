"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// when creating a function, adding a return, the function requires a return type, or it will have "any" assigned
//
function add(a, b) {
    return a + b;
}
// VOID type is used for functions that return nothing.
function log(message) {
    console.log(message);
}
// NEVER type unlike void, it will not only not return something, but also will not finish. Used for Error Handling
function logAndThrow(errorMsg) {
    console.log(errorMsg);
    throw new Error(errorMsg);
} //never is not really individual, it's more an extra layer of context of a void
// FUNCTIONS AS TYPES. a function is also a value, so it can be used as a type.
function performJob(callback) {
    //...
    callback("testicles");
}
let jobLog = (msg) => {
    console.log(msg);
};
// If the "performJob" function wants to get used, its parameters need to be a function
performJob(jobLog);
let Pedro = {
    name: 'Pedro',
    age: 69,
    greet() {
        console.log('Hello there');
        return this.name;
    }
};
let bobby = Pedro.greet();
console.log(bobby);
//# sourceMappingURL=functions.js.map