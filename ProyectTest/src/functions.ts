// when creating a function, adding a return, the function requires a return type, or it will have "any" assigned
//
function add(a: number, b: number): number {
 return a+b;
}

// VOID type is used for functions that return nothing.
function log(message: string): void {
  console.log(message);
}

// NEVER type unlike void, it will not only not return something, but also will not finish. Used for Error Handling

function logAndThrow(errorMsg: string): never {
  console.log(errorMsg);
  throw new Error(errorMsg);
} //never is not really individual, it's more an extra layer of context of a void

// FUNCTIONS AS TYPES. a function is also a value, so it can be used as a type.

function performJob(callback: (params: string) => void){   // same way of writing as an anonymous function un vanilla javascript
  //...
  callback("testicles");
}

let jobLog = (msg: string) => {
  console.log(msg);
}


// If the "performJob" function wants to get used, its parameters need to be a function

performJob(jobLog);

//Using functions as types can work inside objects

type User = {
  name: string,
  age: number,
  greet: () => string;
};

let Pedro: User = {
  name: 'Pedro',
  age: 69,
  greet() {
    console.log('Hello there')
    return this.name;
  }
}

let bobby = Pedro.greet();
console.log(bobby);
