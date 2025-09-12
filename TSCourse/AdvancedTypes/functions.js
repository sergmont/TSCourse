"use strict";
//FUNCTION OVERLOADS
//
function getLength(val) {
    if (typeof val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`; //CALLED TEMPLATE LITERAL. `${SOMEVALUE} joined with some string`;
    }
    return val.length;
}
const tits = "hello losers";
console.log(tits.length); //can call length
const numOfWords = getLength("how many more woodstock calamities do we need to bring jazz back");
console.log(numOfWords);
//console.log(numOfWords.length);   --- cannot call length eventhough its a string.
const numOfNumbers = getLength([1, 2, "balls", 4, 5, "hats", 7]);
console.log(numOfNumbers);
function getValue(val) {
    if (typeof val === "string") {
        const res = val.length;
        return `${res} is string length`;
    }
    return val;
}
const gv1 = getValue("chichichichichichis");
const gv2 = getValue(1238548392);
console.log(gv1, gv2);
