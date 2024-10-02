import { mtm6407, colors, points } from "./data.js";

// Done declaratively 

// console.log(mtm6407);
// console.log(colors);
// console.log(points);

//1. Loop through each student and provide in a new variable provide 
// - First Name
// - Last Name
// - Letter Grade + {Number grade} e.g. (A+ 100%)


//2. Go through each color and return the color that is 'red'

//3. Create a compass variable {object}
// -North - "N"
// -East - "E"
// -South - "S"
// -West - "W"

//Bonus: If you can add this to an html object and return this to the body and make it look like somewath like a compass

//1
const students = mtm6407.map((student) => {
  const { firstName, lastName, gradeLetter, gradeNumber } = student;
  return {
    firstName,
    lastName,
    grade: `${gradeLetter} ${gradeNumber}%`,
  }
});

console.log(students);

//2
const newColor = colors.find((color) => color === 'red')

console.log(newColor);


//3
const compass = points.map((point) => {
  const { name, symbol } = point;
  return console.log(`${name} - "${symbol}"`);
});

console.log(compass);