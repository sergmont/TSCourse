import fs from "node:fs"; 

// TO USE THIS TYPE OF SINTAX, IT IS REQUIRED TO CREATE A PACKAGE.JSON THAT ALLOWS NODEJS AND ITS MODULES BY RUNNING NPM INIT
// After package.json is installed, it needs the type to change to "module" and add dependencies for it to work. In this case, it added 
// @types/node. Installed as: npm install @types/node --save-dev. later added as dev dependencies in package.json


function tests(valueA: string, valueB:number){

 /* 
  * now files like this can be created
  * fs.readFileSync();
  */
  return true;
}
