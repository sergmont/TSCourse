"use strict";
//THIS IS HOW A CLASS WOULD BE MADE IN JS
//CONSTRUCTOR IS THE CORE METHOD OF THE CLASS.
//
/*
class User {
  constructor() {
    this.name = "Sergio";
  }
}
*
*/
class User1 {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
//Another way to create a class, without the initial declaration of elements, is to make the constructor 
// parameters as public
class User2 {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    others() {
        console.log(this.hobbies);
    }
}
const sergio1 = new User1('Sergio', 39);
const sergio2 = new User2('Sergio', 39);
// sergio2.hobbies = ['']; --> wont work because it is read only, however
sergio2.hobbies.push('sports'); //allows it.
console.log(sergio1, sergio2);
