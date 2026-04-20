export const someString = "just a string";
export const someNumber = 2;
export const someObject = {
  name: "Oger",
  rank: 1,
  title: "Oger",
  class: "Beast",
  race: "Oger",
};

export function normalFunction() {
  console.log("nomral function!");
}

export const arrowFunction = () => console.log("arrow function!");

export class SomePeron {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
