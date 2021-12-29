let firstName = "Sam";
let lastName = "Lee";
let fullName = `${firstName} ${lastName}`;
//String Method
//let index = fullName, index('u');
//let lastindex = fullName.lastIndexOf("u");
//console.log(fullName.slice(0, index));
//console.log(fullName.substr(0, 6));
//let result = fullName.replace("a", "w");
const radius = 10;
const pi = 3.14;
let area = pi * radius ** 2;
console.log(area);
let age = 16;
console.log(`My name is ${fullName} and my age is ${age}.`);
console.log(`My first name has ${firstName.length} letters.`);

//Array Method
let names = ["James", "Curry", "Chris"];

/*
let join = names.join(",");
let index = names.indexOf("Chris");
let concat = names.concat(["Samuel", "Vincent"]);
Concat method don't alter the original array
let push = names.push("Joe");
push method does altar the original array
let pop = names.pop();
print out the last value inside an array
*/

//let search = fullName.includes("S");
//This return a boolean

// let score = "100";
// score = Number(score);
// the score is being converted from string to number
// score = String(score);
// the score is being converted from number to string
// let type = typeof score;
// console.log(type);

// let result = Boolean('')
// empty string = false
// any length of string = true

// let result = Boolean(0)
// num <= 0 will be false
// num > 0 will be true

//for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// // while loop
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// // do while loop
// let num = 2;
// do {
//   console.log(names[num]);
//   num++;
// } while (num < 1);

// // if statements
// let password = "bruh";
// if (password.length >= 8) {
//   console.log("Your password is long enough");
// } else {
//   console.log("Your password is not long enough");
// }

// //logical operator &&-and ||-or

// // break and continue
// let scores = [0, 90, 100, 60];
// for (i = 0; i < scores.length; i++) {
//   if (scores[i] <= 60) {
//     continue;
//   }
//   console.log(`Your score on test ${i + 1} is ${scores[i]}`);
//   if (scores[i] === 100) {
//     console.log("Congrats bro! You got a 100.");
//     break;
//   }
// }

// switch
let grade = 70;
switch (grade) {
  case 90:
    console.log("You got an A");
    break;
  case 80:
    console.log("You got an B");
    break;
  case 70:
    console.log("You got an C");
    break;
  case 60:
    console.log("You got an D");
    break;
  default:
    console.log("You got an F");
}
