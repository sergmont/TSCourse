// ENUMS are not in vanilla javascript, but typescript allows their use, and JS makes a workaround
// ENUMS work as they're known.  assign a key automatically to a value in a type of array


enum Role {
  "Admin",
  "Editor",
  "Guest"
}

// admin is 0, editor is 1, guest is 2 and so on.
let userRole = Role.Admin; 
console.log(userRole);
//...

userRole = 2;
console.log(userRole);
// both work, because first is declaring it is a Role type, the second one, just need to point to the desired role
//

enum Sport{
  Soccer,
  Basquetball,
  Golf
}

let selectSport = Sport.Basquetball;

console.log(selectSport);
//... extra code

selectSport = 2;

console.log(selectSport);

//LITERAL VALUES refers to types assigned outside of the default ones. 


let Role2: 'Admin'|'Editor'|'Guest' = 'Admin';

//... happenings

Role2 = 'Guest';

//LITERAL IN TUPLES can also be done, assigning the specific numbers of the pair of values

let possibleResult: [1 | -1, 2 | -2];

possibleResult = [-1, -2];



// TYPE ALIASES or CUSTOM TYPES are generally helpful when needing to create subcategories or specific deterministic information
//
type Roles = 'Admin'|'Editor'|'Guest'|'Reader';

let usrRoles: Roles = 'Editor';

// ALSO type Aliases work as a class in OOP

type Person= {
  name: string;
  age: number;
  sex: boolean;
  role: Roles;
  permissions: string[];
}



