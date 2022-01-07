// // // THIS WILL NOT WORK. Variables declared inside the function
// // // are only available within that function. "name" is not available.
// function logger() {
//     const name = "Dev Ed";
//     console.log("Party Time");
//     console.log("Party Time");
//     console.log("Party Time");
//     console.log("Party Time");
// // }

// // console.log(name);

// // // THIS WILL WORK. The name variable is declared in the global
// // // scope and called in the function scope. 
// // // varibales declared in our function scope are not available in our
// // // global scope. Variables decalered in the global scope are accessible
// // // everywhere
// // const name = "Dev Ed";

// // function logger() {
// //     console.log(name);
// //     console.log("Party Time");
// //     console.log("Party Time");
// //     console.log("Party Time");
// //     console.log("Party Time");
// // }

// // // BUT none of the code will run (aka appear 
// // // in the console unless we call it). 
// // logger();


// // // PART TWO PARAMETERS ////////////////////////////////
// // //////////////////////////////////////////////////////
// // // We are passing in 5 and 10 as our parameters so that
// // // they can be added together in the console
// // function adder(num1, num2) {
// //     console.log(num1 + num2);
// // }

// // adder(5,10);

// // PART THREE TOUPPERCASE ///////////////////////////
// ////////////////////////////////////////////////////
// // declare a global variable name and give it the string 
// // value of "Dev Ed." Declare a function named to upper with
// // the parameter (text) 
// // const name = "Dev Ed"

// // function toUpper(text) {
// //     const upperCased = text.toUpperCase();
// //     console.log(upperCased);
// // }

// // toUpper(name);


// // can also do
// const toUpper = function() {

// }

// // can also do
// const toUpper = () =>{

// }


// // PART FOUR IF STATEMENTS /////////////////
// ////////////////////////////////////////////

// const age = 10;

// if(age > 18) {
//     console.log('You are good to go!');
// } else {
//     console.log("You are not old enough");
// }

// // PART FIVE ELSE IF STATEMENTS //////////////
// /////////////////////////////////////////////
// // used for checking for more than one condition

// const age = 10;

// if(age > 18) {
//     console.log('You are good to go!');
// } else if (age < 15) {
//     console.log("Wow you are really young..why are you even here")   
// } else {
//     console.log("You are not old enough");
// }



// const age = 30;

// if (age < 20) {
//     console.log("This will not run");
// } else if (age > 20) {
//     console.log("This willl run");
// } else {
//     console.log("This will not run");
// }





// write a function to make text upper case

const name = "lara";

function UpperCase(text) {
    const toUpperCase = text.toUpperCase();
    console.log(toUpperCase);
}

UpperCase(name);
