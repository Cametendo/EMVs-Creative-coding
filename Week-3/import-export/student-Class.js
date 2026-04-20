class Student {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
  }
}

function printName(student) {
  console.log(`Student's name is: ${student.name}`);
}

const printMood = (student) => console.log(`Student's mood is ${student.mood}`);

//Multiline:
export default Student;
export { printName }; // export { printName as displayName };
export { printMood }; // export { printName as displayMood };

// Or one liner (Only one export works though):
// export { Student as default, printName, printMood };
