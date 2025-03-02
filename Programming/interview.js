// function setupSearch() {
//     let debounceTimer;
//     const searchInput = document.getElementById('search');

//     searchInput.addEventListener('input', (event) => {
//         const query = event.target.value;

//         if (debounceTimer) {
//             clearTimeout(debounceTimer);
//         }

//         debounceTimer = setTimeout(() => {
//             fetchSearchResults(query);
//         }, 300);
//     });

// }
// function fetchSearchResults(query) {
//     console.log(`Fetching results for: ${query}`);
// }

// setupSearch();

// function checkDataType(value) {
//     console.log(`Value: ${value}, Type: ${typeof value}`);
// }
// checkDataType(null);
// checkDataType(10);
// checkDataType('Hell this rashed!');
// checkDataType({key: 1});
// checkDataType([1,2,3,4,5]);
// checkDataType(undefined);   let age = 18;

// nested if else statement
// let isLoggedIn = true;
// let hasPermission = true;
// if (isLoggedIn) {
//   if (hasPermission) {
//     console.log("Access granted");
//   } else {
//     console.log("No permission");
//   }
// } else {
//   console.log("Please log in first.");
// }

// // ternary operator
// let age = 15;
// let result =
//   age >= 18 ? "You are allow for this side." : "You are not allowed.";
// console.log(result);


// // switch statement
// let day = 4;

// switch (day) {
//   case 1:
//     console.log("Friday");
//     break;

//   case 2:
//     console.log("Saturaday");
//     break;

//   case 3:
//     console.log("Sunday");
//     break;

//   case 4:
//     console.log("Monday");
//     break;

//   case 5:
//     console.log("Tuesday");
//     break;

//   case 6:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// //lopps and iterations
// for(let i = 0; i<5; i++) {
//     console.log(i);
//     for(let j = 0; j<5; j++) {
//         console.log(j);
//     }
// }

// //while loop
// let i = 5;
// while (i <= 5) {
//     console.log("Iteration:", i);
//     i++;
// }
//     // do-while loop
//     let k = 0;
//     do {
//         console.log("Do-While Iteration:", k);
//         k++;
//     } while (k < 5);


//     //Rolling dice game
//     let dice;
//     do {
//         dice = Math.floor(Math.random() * 6) + 1;
//         console.log(`Dice rolled: |${dice}`);
//     } while (dice !== 6);
        
//     console.log("You got a 6! Game over!");



// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let choice;

// const showMenu = () => {
//     console.log("1. Play game");
//     console.log("2. Choose level");
//     console.log("3. Exit");
// };

// const getChoice = () => {
//     rl.question("Enter your option: ", (input) => {
//         choice = parseInt(input);

//         if (isNaN(choice)) {
//             console.log("Please enter a valid number");
//             choice = 0;
//         }

//         if (choice !== 3) {
//             showMenu();
//             getChoice();
//         } else {
//             console.log("Exiting...");
//             rl.close();
//         }
//     });
// };

// showMenu();
// getChoice();

    
    
    
    
    /* The commented code block is an example of a real-life problem scenario where we have an array of
    users with different roles. The code uses a forEach loop to iterate over each user object in the
    array and checks the role of each user using a switch statement. */
    // Example of a real-life problem: Checking user access levels
    // const users = [
    //     { name: "Alice", role: "admin" },
    //     { name: "Bob", role: "user" },
    //     { name: "Charlie", role: "guest" }
    // ];

    // users.forEach(user => {
    //     switch (user.role) {
    //         case "admin":
    //             console.log(`${user.name} has full access.`);
    //             break;
    //         case "user":
    //             console.log(`${user.name} has limited access.`);
    //             break;
    //         case "guest":
    //             console.log(`${user.name} has guest access.`);
    //             break;
    //         default:
    //             console.log(`${user.name} has no access.`);
    //     }
    // });

// // for..of loops will be used whenver we want to iterate over the values of an iterable object like an array...
// let fruits = ["apple", "banana", "cherry"];
// for(let fruit of fruits) {
//     console.log(fruit);
// }


// //for...in loop used to iterate over key values pairs of the object

// let person = {
//     name: "Rashed",
//     age : 25,
//     schoolName: "Ambagan High School"
// };
// for(let key in person) {
//     console.log(key, ":", person[key]);
// }

// //loop break and continue
// for(let i = 0; i<=5; i++) {
//     if(i=== 3) {
//         break;
//     }
//     console.log("i:", i);
//     for(let j = 0; j<=5; j++) {
//         if(j === 3) {
//             continue;
//         }
//         console.log( "j:", j);
//     }
// }


//callback function 
// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function showMessage() {
//     console.log("This is a callback function");
// }
// greet("Rashed", showMessage);

// //asynconous function with callback function

// function fetchData(callback) {
//     setTimeout( () => {
//         console.log("Data fetched successfully!");
//         callback();
//     }, 1000) //simulating a delay of 2 seconds
// }

// function processData() {
//     console.log("Processing the face data...");
// }

// //call the function with callback function

// fetchData(processData);


// // callback hell
// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed!");
//         callback();
//     },1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Steo 2 completed!");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 is completed!");
//     }, 1000)
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps are completed!");
//         })
//     })
// })


//for..of loo this loop will be used in string/object

// let fruits = ["apple", "banana", "cherry", "mango", "jackfruit"];
// for(let fruit of fruits) {
//     console.log(fruit);
// }

//for...in
//this loop will be used in object
// let person = {
//     name: 'Rashed',
//     passion: 'Engineering',
//     hometown: 'Rangpur',
//     MatrialStatus: 'Single'
// }

// for(let key in person) {
//     console.log(key, ":", person[key]);
// }


// //array declare and access
// let myFavourite = ["apple", "banana", "cherry", "mango", "jackfruit"];
// console.log(myFavourite[0]);
// console.log(myFavourite[1]);
// console.log(myFavourite[2]);


// //array and update
// myFavourite[1] = "mango";
// console.log(myFavourite);

// // array add
// myFavourite.push("orange");
// console.log(myFavourite);

// console.log(myFavourite.length);

//myFavourite.reverse();
//console.log(myFavourite);

// myFavourite.splice(3, 2, "gaouwava");
// console.log(myFavourite);

// myFavourite.pop();
// console.log(myFavourite);

// myFavourite.shift();
// console.log(myFavourite);

// myFavourite.unshift("apple");
// console.log(myFavourite);

// myFavourite.sort();
// console.log(myFavourite);


//forEach

// Array.forEach(function(element, index, array){
//     console.log
// });


//
// let globalVar = "I am a global variable";

// function testScope() {
//     console.log(globalVar);
// }
// testScope();
// // console.log(globalVar);
// function myFunction() {
//     let localVar = "I am a local variable";
//     console.log(localVar);
// }
// myFunction();



// //block scope

// // let bookShop = "Boi Ghar";
// if(true) {
//     var varBlock = "I am using var variable for this block scope";
//     console.log(varBlock);
// }

// // nested scope 
// function outerFunction() {
//     let outSide = "I am outside of the nested function";
//     console.log(outSide);

//     function innerFunction() {
//         let inSide = "I am inside of the innner function";
//         console.log(inSide);
//     }
    
// }


//function declaration Hoisted হয়, মানে ফাংশন ডিক্লারেশন আগে থেকেই মেমোরিতে চলে যায়।
// sayHello();
// function sayHello() {
//     console.log("Hello World!")
// };

//function expression Hoisted হয় না।
// sayHello();
// const sayHello = function() {
//     console.log("Hello World!");

// };
// sayHello();

// // arraw function
// const add = (a,b) => {
//     console.log(a+b);
// }
// add(10,20);


// function myAdress() {
//     console.log("I am from Rangpur");
// }

// const arrowFunction = () => {
//     console.log("Hello world!");
// }
// arrowFunction();


// //immediately invoked function expressio(IIFE) ফাংশন ডিক্লেয়ার করার সাথে সাথে ইনভোক হয়ে যায়।
// ( function() {
//     console.log("I am IIFE function");
// }

// )();

//
// const rashedArrow = () => {
//     let name = "Rashed";
//     let age = 25;
//     let passion = "Engineering";
// }
// console.log(rashedArrow);
// console.log(rashedArrow.name);

//execution context in action

// function first() {
//     console.log("First function");
//     second();
// }

// function second() {
//     console.log("Second function");
//     third();
// }

// function third() {
//     console.log("Third function");
// }
// first();


// //call stack in execution context with single threaded language
// //it will be loaded in stack memory and then it will be executed in execution phase 

// function greet() {
//     console.log("Hello");
// }

// function freeWebnair() {
//     console.log("Welcome to the free webnair");
// }

// function register() {
//     console.log("You are registered for the webnair");
// }


// freeWebnair();
// register();
// greet();

// //for each for side effect

// // const numbers = [1,2,3,,4,5,6,7,8,9];
// // numbers.forEach(num => console.log(num));

// //dom manupulation
// const elements = document.querySelectorAll('.item');
// elements.forEach(item => {
//     item.style.color = 'blue';
// });

// //database update
// const users = [
//     {name: 'Rashed', age: 25},
//     {name: 'Rahim', age: 30},
//     {name: 'Karim', age: 35}    
// ]
// users.forEach(user => {
//     user.age += 1;
// });

//object key value pair

// let person = {
//     name: "Rashed",
//     age: 25,
//     country: "Bangladesh"
// };

// //access properities
// console.log(person.name);
// console.log(person ["age"]);

// //update properities
// person.profession = "Software Engineer";
// console.log(person);

// //update properities
// person["country"] = "USA";
// console.log(person);

// person.age = 30;
// console.log(person);


// delete person.country;
// console.log(person);

//object iteration
// let person = {
//     name: " Rashed",
//     age: 25,
//     profession: "Developer"
// };


// for(let key in person) {
//     console.log(key, ":", person[key]);
// };


// //function in loops
// function greet() {
//     console.log("Hello, + Rashed");
// }
// greet("babies!");

// //parameter and arguments
// function greet(name) {
//     console.log("Hello, " + name + "!")
// }
// greet("Rashed");
// greet("Raisha");

// //function return 
// function add(a,b) {
//     return a+b;
// }

// let result = add(5,6);
// console.log("Result:", result);


// // function expression
// const greet = function (name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Rashed"));

// // arrow function
// const myDear = () => console.log("Welcome to the arrow function!");
// myDear();

// // default parameter in function
// function welcomeHome( name = "Guest", home = "Rangpur") {
//     console.log("Hello, " + name , "!");
//     console.log("Are you from, " + home, "?");
// }

// welcomeHome("Raisha", "Rangpur");
// welcomeHome("Rashed", "Dhaka");


// //rest parameter
// function exampleFunction(...args) {
//     console.log(args);
// }
// exampleFunction(1,2,3,4);

// function logUserDeatils(name, age, ...details) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log("Additional Deatails:", details);
// }

// logUserDeatils("Rashed", 25, "Engineer", "Bangladesh", "Single" );


// //more example with problem solving
// function sumNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0)
// }
// console.log(sumNumbers(10,20,30));

// //event handler with rest in js
// function handleClick(event, ...extraArgs) {
//     console.log("Events:", event.type);
//     console.log("Extra:", extraArgs);
// }
// document.querySelector("button").addEventListener("click", (e) => handleClick(e, "Button Clicked", new Date()));


//custom logging function ডেভেলপমেন্টে লজিং ফাংশনে একাধিক ডাটা লজ করতে চাইলে রেস্ট প্যারামিটার ব্যবহার করতে পারেন।

// function logMessages(logType, ...messages) {
//     console.log(`[${logType}]`, ...messages);

// }
// logMessages("info", "Server Started", "PORT: 3000" );



// //call back function
// function ProcessUserInput(memory, callback) {
//     console.log("Processing name:",memory);
//     callback(memory);
// }

// function greet(memory) {
//     console.log("Hello, " + memory , "!");
// }
// ProcessUserInput("Intel", greet);


// //IIFE
// (function(){
//     console.log("This is an IIFE");
// })



// //***JS ES6 features template literals
// let name = "Rashed";
// let age = 25;

// //without template literals
// console.log("Hell ,"+ name + "! You are " + age + "years old ");

// //with tempalte literals
// console.log(`Hello, ${name}! You are ${age} years old`);



// //deafault parameter
// function greet(name = "Guest") {
//     console.log(`Hello , ${name}`);
// }
// greet();
// greet("Rashed");


//destructering in js
// without destructering
// let numbers = [10, 20, 30];
// let first = numbers[0];
// let second = numbers[1];
// console.log(first, second);

//without desturctering
// let [a, b ] = numbers;
// console.log(a,b);


// //without object desturctering
// let person = {
//     name: "Rashed",
//     age: 25,
//     occuppation: "Engineering"
// }
// console.log(name, age);

// //without object desturctering
// let{name: personName, age: personAge} = person;
// console.log(personName, personAge);

// //desturctering with rest operator
// let obj1 = {
//     name: "Rashed",
//     age: 25
// }
// let obj2 = {
//     country: "Bangladesh",
//     profession: "Developer"
// }
// let combinedobj = {...obj1, ...obj2};
// console.log(combinedobj);

// //class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     } 
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old `);

//     }
// }

// let person1 = new Person("Rashed", 25);
// person1.greet();


//promises

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve("Operation successful!");

//     } else {
//         reject("Operation failed!");
//     }

// });

// myPromise
// .then((message) => {
//     console.log(message);

// })
// .catch((error) => {
//     console.log(error);
// });



//closure innter function এর scope হবে outterfunction এর lexical scope. 
// outer function টা যেই execution context এ ছিল, সেই execution context  এর lexical scope এ যা যা  ছিল
//সব variable or function কে ইন্নার function access করতে পারবে.
function outerFunction() {
    let count = 0 ;

    function innerFunction() {
        count++;
        console.log(count);
    }
    return innerFunction;
}

const myClosure = outerFunction();
myClosure();
myClosure();


//another example
function outerFunction() {
    let outerVariable = "I am outer!";

    function innerFunction() {
    console.log(outerVariable);
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();                                 

//
