"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = document.getElementById("username");
// console.log(input.value);    ==> by itself, throws an error because it does not know what information it is getting. 
//                                  it must require a way to notify that it accepts null or undefined, or have an if else
//                                  statement that handles the possible missing data.
// ADDING A TRUTHY for the input variable, allows for the null possibility to be threated
// this is called type narrowing
//
//
if (!input) {
    throw new Error('Element not found');
}
else {
    console.log(input);
}
// A BETTER WAY: in Typescript, there is a way to avoid the truthy code block. Instead of writing an if statement, add a ! at the end of the element
const input2 = document.getElementById("username");
console.log(input2); //console.log(input2!.value);
// another way, is the standard javascript way of writing, which is adding a question mark ? (input2?.value) It is an inline check if the element is null.
//
const input3 = document.getElementById("username");
console.log(input3); //console.log(input3?.value);
//TYPE CASTING. In the previous examples, value has not been available, because eventough TS/JS know the element is an HTMLelement, it does not know of what type
// Also called "type assertion" which means to add a TS specific operator called "as"
const input4 = document.getElementById("username");
console.log(input4.value);
//# sourceMappingURL=forms.js.map