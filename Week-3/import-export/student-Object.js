function printName(student) {
  console.log(`Student's name is: ${student.name}`);
}

const printMood = (student) => console.log(`Student's mood is $(student.mood)`);

// Multiline
export { printName };
export { printMood };

//Or one liner (Only one export works though):
// export { printName, printMood };
/*
export {
	Student as default,
	printName as displayName,
	printMood as displayMood,
};
*/
