// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable named Dane
// We check to see if the name variable is exactly equal too Mary
// otherwise we console log "how do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/


// 2. WRITE YOUR DESCRIPTION HERE
// We define an empty variable of secret
// We define a variable called code and assign it to 123
// We check to see if code is equal to 123
// if the condition is true in that code variable is equal to 123
// we set secrete to the string super
// we change code from 123 to its own value times 2
// if code is greater than 250 we set secret to the string duper
// finally we console.log the secret variable.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We define a variable for isStudent and set its value to true
// We define another variable of age and set its value to a integer of 34
// We define yes another variable of zip and set its value to 55407;
// We define a condition to check if isStudent is equal to true and that zip is greater than 80000.
// If the condition is true we console log out ("You're a student on the west coast");
// If the condtion fails we continue on to the next else if - checking if isStudent variable is equal to false OR age is less than 30
// If that condition is true we console out "What are you hobbies?";
// If that condition fails we continue on to another else if - checking if isStudent is equal to true
// If that condition is true we console log out "Welcome to Prime!";
// If that condition fails along with the prior conditions we go to the final else and console loog out "How about the weather?"


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/






// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// Answer = color two is not being defined as purple in the condition.



/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple'; ******************** color two is not being defined as purple
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// Answer = The conditon is checking for OR instead of AND

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) { .  ITS AND NOT OR FOR FUTURE REFERENCE********************
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// Answer = While the conditon is written oddly, but switching the symbol in the condition or flipping the console logs would result in the correct value.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

*/

