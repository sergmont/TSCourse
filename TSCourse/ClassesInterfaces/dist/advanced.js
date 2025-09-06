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
    _other = ""; // protected diferent from private, can be accessed in extended classes, but still hidden from outside.
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
        super(); //super is REQUIRED when extending another class, to fill the parents constructor parameters
        this.jobTitle = jobTitle;
        //  super.firstName = "Bob";
        //  super.lastName = "Robertson";
    }
    work(a) {
        // add any functionality for this particular class.
        console.log("work method");
        //this._firstName = "test";   -> cannot get called without getter bcs private.
        this._other = a; // the protected variable can be called and modified directly since it is protected and inherited.
        console.log(this._other);
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
Bob.work("protected, inherited and modified data in child and tits");
console.log(Bob.fullName, Bob.jobTitle);
// Abstract classes are meant to be used as "base" classes for other classes, not to get used directly.
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone() { }
}
// const uiElement = new UIElement('anyUIElementID'); --> gives Error 
//
class SomeUIElement extends UIElement {
    id;
    someOtherThing;
    constructor(id, someOtherThing) {
        super(id);
        this.id = id;
        this.someOtherThing = someOtherThing;
    }
}
// this works because the instance is created with the class inheriting the  ABSTRACT  class.
const uiElement = new SomeUIElement('anyUIElementID', 'some other information');
//USING INTERFACE AS OBJECT TYPE
let authUser;
authUser = {
    email: 'some@email.com',
    password: 'some password',
    login() {
        "some Method";
    },
    logout() {
        "some other method";
    }
};
//using extended implementation
let adminAuthentication;
adminAuthentication = {
    //admin specific interface params
    role: 'type of admin role',
    ipAddress: 'current Ip address',
    //general auth params
    email: 'some@email.com',
    password: 'some password',
    login() {
        "some Method";
    },
    logout() {
        "some other method";
    }
};
//USING INTERFACE AS CONTRACT
class authUser2 {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
        /* some code */
    }
    login() {
        /* some code */
    }
    logout() {
        /* some code */
    }
}
