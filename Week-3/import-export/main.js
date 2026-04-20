import { printMood, printName } from "./student-Object.js";

const myStudent1 = { name: "Sven", mood: "Ruffy" };

console.log("myStudent:", myStudent1);
printName(myStudent1);
printMood(myStudent1);

/*
import Student, {
  printMood as printngMood,
  printName as printngName,
} from "./student-Class.js";

const myStudent2 = new Student("Juerg", "Wanted");

console.log("myStudent:", myStudent);
printingName(myStudent2);
printingMood(myStudent2);
*/

import Student, {
  printMood as renameFunction,
  printName as printedName,
} from "./student-Class.js";

const myStudent = new Student("Nika", "God");

console.log("myStudent:", myStudent);
printedName(myStudent);
renameFunction(myStudent);

import {
  SomePeron,
  arrowFunction,
  normalFunction,
  someNumber,
  someObject,
  someString,
} from "./directExport.js";

console.log(new SomePeron("someName", 22));
arrowFunction();
normalFunction();
console.log(someNumber);
console.log(someObject);
console.log(someString);
