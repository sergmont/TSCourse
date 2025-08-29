function generateError(msg?: string){
  throw new Error(msg)
}

generateError();

// if the question mark in the parameter of the function was not there, the function "generateError()" would have an error, because there is no parameter being added. However,
// with the question mark, it allows the msg to be empty or null. And either any message or no message is valid. 
//
// not only optional parameters, but also optional properties 

type Usr = {
  name: string;
  age: number;
  role?: 'admin' | 'guest'; //OPTIONAL given the question mark
};



// NULLISH COAELESCING

let input5 = '' ; 
const didProvideInput = input5 || false;

// the OR OPERATOR  which is  ||, given the right side has an added "false" then it will check if the left element is not "falsey"
//

let input6 = '';
const didProvideInput2 = input6 ?? false;

// the ?? operator will only check if the left side is null or undefined. It will not look for falsy values or other things, and the value on the right, will be assigned to the const, given it IS null or undefined
