"use strict";
//GETTERS AND SETTERS, LIKE IN C# but easier.
//get keyword to work as a default return value for the class information.
//set keyword requires to get exactly one parameter per call
//
// User3 = Example of class with GETTERS
class User3 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
// User4 = Example of class with SETTERS;
class User4 {
    _firstName = "";
    _lastName = "";
    set firstName(fname) {
        this._firstName = fname;
    }
    set lastName(lname) {
        this._lastName = lname;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
}
class Employee extends User4 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        //  super.firstName = "Bob";
        //  super.lastName = "Robertson";
    }
}
const sergio3 = new User3("Sergio3", "Montemayor");
console.log(sergio3.fullName);
const sergio4 = new User4;
sergio4.firstName = 'Sergio4 ';
sergio4.lastName = 'Montemayor';
console.log(sergio4.fullName);
class User5 {
    static Group = "8B";
}
console.log(User5.Group); //works without instanciation of the class
const Bob = new Employee("manager");
Bob.firstName = "Bob";
Bob.lastName = "Robertson";
console.log(Bob.fullName, Bob.jobTitle);
