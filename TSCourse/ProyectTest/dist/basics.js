"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
let userName;
let age;
userName = 'Max';
// ERROR --> userName = 543;
age = 5;
// ERROR --> age = '5';
function add(a, b) {
    return a + b;
}
console.log(add(3, 2));
// To create a parameter that accepts multiple types
let userName2;
userName2 = 80085;
userName2 = "BOOBS";
// arrays recognize types when created without explicit type declaration
let hobbies;
hobbies = ["comer", "dormir"];
// ERROR --> hobbies.push(10);
hobbies.push("gatos");
console.log(hobbies); // comer, dormir, gato
//ARRAY types
let arrayValues; //proper declaration of an array with types. Can include string, number and boolean
arrayValues = [12, 13, 14];
let arrayValues2; // proper way to create an array with generic types, meaning it can use either one or the other.
arrayValues2 = [12, 'sergio'];
let arrayValues3; // called TUPLES, arrays where only two values can be assigned to the array.
arrayValues3 = [14, 18];
//OBJECTS can include single values, arrays, other objects, etc. 
let firstObject = {
    name: "Dude",
    age: 54,
    hobbies: ["eating", 'sleeping', 'scratching'],
    friends: {
        person1: 'George',
        person2: 'Maria',
        person3: 'Reuben',
    }
};
console.log(firstObject);
// ALLTHOUGH {} means "empty object" it also works as a type that mentions something as "not null"
let emptyVal;
//emptyVal = null;   --> will not work
emptyVal = "boobies"; // works just fine
// another way to use the "empty object" type, is RECORD, which is a type of flexible type
let recordType;
recordType = {
    name1: "chichon",
    name2: 123,
    //name3: true wouldn't work because boolean is no assigned as a possible type
};
//# sourceMappingURL=basics.js.map