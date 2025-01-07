// Write a JavaScript conditional statement that will find the sign of the product of three numbers. Display an alert window with the appropriate sign.

// Explanation of the code:

// 1. Create an array with three numbers.
// 2. Create a variable whose initial value is 1, and it will store the product of all three numbers.
// 3. Create a for loop to iterate through each number and multiply them to get the result.
// 4. After the for loop, create a condition that will check if the result is negative (-), positive (+), or zero.

// let arr = [3, -7, 2];

// console.log("We need to find the product of the numbers within the given array: ", arr, ".");
// console.log("*******************************************************");

// let result = 1;

// for (let i = 0; i < arr.length; i++) {

//     console.log("Multiplying each number and updating the variable: ", arr[i], " * ", result, ".");
//     console.log("*******************************************************");

//     result *= arr[i];

// }

// console.log("The result of the product of all three numbers is: " + result + ".");
// console.log("*******************************************************");

// if (result > 0) {

//     console.log("The sign of the product of the three numbers is '+'.");
//     console.log("*******************************************************");

// } else if (result < 0) {

//     console.log("The sign of the product of the three numbers is '-'.");
//     console.log("*******************************************************");

// } else {

//     console.log("The product of the three numbers is zero.");
//     console.log("*******************************************************");

// }

// If we want the code to process the user input, the code would look like this.

// We modified the code so that the user can enter the desired numbers to check 
// the product of three numbers and to check the sign of the product of the three numbers.

// 1. We create an empty array.
// 2. Create a variable whose initial value is 1, and it will store the product of all three numbers.
// 3. We create a for loop through which the user will be able to enter the desired numbers 3 times.
// 4. Create a for loop to iterate through each number and multiply them to get the result.
// 5. After the for loop, create a condition that will check if the result is negative (-), positive (+), or zero.



// let arr = [];

// let arrLength = 3;

// let result = 1;

// for (let i = 0; i < arrLength; i++){

//     let userInput = prompt("Enter the number");
//     arr.push(userInput);

// }

// for (let i = 0; i < arr.length; i++){

//     result *= arr[i];

// }

// console.log("The result of the product of all three numbers is: " + result + ".");

// if (result > 0){

//     console.log("The sign of the product of the three numbers is '+'.");

// } else if (result < 0){

//     console.log("The sign of the product of the three numbers is '-'.");

// } else {

//     console.log("The product of the three numbers is zero.");

// }


