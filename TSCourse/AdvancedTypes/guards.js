"use strict";
const fileSource = {
    type: "file",
    path: "some/path/",
};
const dbSource = {
    type: "db",
    connectionURL: "some://connection-url",
};
function isFile(source) {
    return source.type === "file";
    // -- Using type Predicates. Uses a boolean to verify if the type is of a specific type, or guard, previously defined.
}
function loadData(source) {
    /*
     * evaluation of data if it needs file source or db source. Such evaluation is a GUARD
     */
    if ("path" in source) {
        source.path; //implied that this is a File
        return;
    } // moving past the if, means source is not a FileSource. only other option is DBSource.
    source.connectionURL;
    return;
}
class User {
    name;
    constructor(name) {
        this.name = name;
        // ...
    }
    join() {
        //...
    }
}
class Admin {
    constructor(permissions) {
        //....
    }
    scan() {
        // ...
    }
}
const user = new User("Bob");
const admin = new Admin(["ban", "restore"]);
// USING INSTANCEOF IF A WAY OF DISCRIMINATE TYPE SPECIFICS WHEN TYPES ARE OBJECTS OF DECLARED CLASSES.
function init(entity) {
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
    return;
}
