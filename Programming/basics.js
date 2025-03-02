// // Programming Basics: Variables, Functions, Control Structures

// // Example: Factorial Function
// function factorial(n) {
//     if (n < 0) return undefined;
//     let result = 1;
//     for(let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // 120


// let mutableVariable  =  'I can change! ';
// const immutablevariable = 'I can not change';


// control structure if else statement
let age  = 18;
if(age> 18) {
    console.log('You are an adult');

}
else {
    console.log('You are Minor');
}

let day = 'Monday';
switch(day) {
    case 'Monday':
        console.log('Start of the week');
        break;
        case 'Friday':
            console.log('End of the week');
            break;
            default:
                console.log('Middle of the week');
}



// for loop
for(let i= 0; i<5; i++){
    console.log(i);

}

// //whie loop
// let count = 0;
// while(count<5) {
//     console.log(count);
//     count++;
// }

// //function
// function add(a,b) {
//     return a+b;


// }

// //
// const subtract = function(a,b) {
//     return a-b;
// }

//
// Description: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".


for(i= 1; i<=100; i++) {
    if(i%15 ===0) {
        console.log("FizzBuzz");
    } else if(i%3=== 0){
        console.log('Fizz');
    } else if(i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    } 
}

//