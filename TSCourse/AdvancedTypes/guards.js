"use strict";
const fileSource = {
    path: "some/path/",
};
const dbSource = {
    connectionURL: "some://connection-url",
};
function loadData(source) {
    /*
     * evaluation of data if it needs file source or db source. Such evaluation is a GUARD
     */
    if ('path' in source) {
        source.path; //implied that this is a File
    }
    else if ('connectionURL' in source) {
        source.connectionURL; //implied that this is a DB Connection
    }
    else {
        throw "Invalid Data";
    }
}
