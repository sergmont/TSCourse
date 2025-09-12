//FUNCTION OVERLOADS
//
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    const numberOfWords = val.split(" ").length;
    return `${numberOfWords} words`; //CALLED TEMPLATE LITERAL. `${SOMEVALUE} joined with some string`;
  }
  return val.length;
}
const tits = "hello losers";
console.log(tits.length); //can call length

const numOfWords = getLength(
  "how many more woodstock calamities do we need to bring jazz back",
);
console.log(numOfWords);
//console.log(numOfWords.length);   --- cannot call length eventhough its a string.
const numOfNumbers = getLength([1, 2, "balls", 4, 5, "hats", 7]);
console.log(numOfNumbers);

//TYPESCRIPT RECOGNIZES THAT GETLENGTH RETURNS A TYPE OF EITHER STRING OR ANY[], BUT DOESNT TREATS THE RESULTS AS EITHER ONE.
//THIS ARE FUNCTIONS OVERLOADS FOR SUCH SITUATIONS. NOT COMMON BUT MIGHT EXIST;

function getValue(val: number): number;
function getValue(val: string): string;
function getValue(val: string | number) {
  if (typeof val === "string") {
    const res = val.length;
    return `${res} is string length`;
  }
  return val;
}

const gv1 = getValue("chichichichichichis");
const gv2 = getValue(1238548392);

console.log(gv1, gv2);
