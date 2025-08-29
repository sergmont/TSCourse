"use strict";
// ENUMS are not in vanilla javascript, but typescript allows their use, and JS makes a workaround
// ENUMS work as they're known.  assign a key automatically to a value in a type of array
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
// admin is 0, editor is 1, guest is 2 and so on.
let userRole = Role.Admin;
console.log(userRole);
//...
userRole = 2;
console.log(userRole);
// both work, because first is declaring it is a Role type, the second one, just need to point to the desired role
//
var Sport;
(function (Sport) {
    Sport[Sport["Soccer"] = 0] = "Soccer";
    Sport[Sport["Basquetball"] = 1] = "Basquetball";
    Sport[Sport["Golf"] = 2] = "Golf";
})(Sport || (Sport = {}));
let selectSport = Sport.Basquetball;
console.log(selectSport);
//... extra code
selectSport = 2;
console.log(selectSport);
//LITERAL VALUES refers to types assigned outside of the default ones. 
let Role2 = 'Admin';
//... happenings
Role2 = 'Guest';
//LITERAL IN TUPLES can also be done, assigning the specific numbers of the pair of values
let possibleResult;
possibleResult = [-1, -2];
let usrRoles = 'Editor';
//# sourceMappingURL=choices.js.map