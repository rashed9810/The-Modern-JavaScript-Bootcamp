// var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
//   console.log(burger[2]);
//   var bicycle = {
//     wheels: 2,
//     start: function() {

//     },
//     stop: function() {

//     }
// }; console.log("bicycle");

// try {
//     throw new Error();
//     console.log('Hello');
//   } catch(err) {
//     console.log('Goodbye');
//   }

//   function add(a, b) {
//     console.log(a + b)
//   }

//   add(3, "4");

//   var result;
//   console.log(result);
//   var str = "Hello";
//   str.match("jello");

//   try {
//     Number(5).toPrecision(300)
//     } catch(e) {
//     console.log("There was an error")
//     }

//     var str = "Hello";
// str.match("jello");




// // // practice  for js  and task

// // // Task No: 01
// const car3 = {
//   speed: 300,
//   color: "yellow"
// }
// console.log(Object.values(car3)); // [300, 'yellow']

// const car4 = {
//   speed: 400,
//   color: 'magenta'
// }
// console.log(Object.entries(car4));


// var clothingItem = {
//   price: 50,
//   color: 'beige',
//   material: 'cotton',
//   season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//   console.log(key, ":", clothingItem[key])
// }


// // // day- 15 december 2023


// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
// function logDairy() {
//   for(var item in dairy) {
//     console.log(item);
//   }

// }
// // call the function from this 
// logDairy();


// // solution
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDairy() {
//   for (const item of dairy) {
//     console.log(item);
//   }
// } 

// // Call the function to see the output
// logDairy();


// // second task of the problem with solution

//  const animal = {
//   canJump: true
//  };

//  const bird = Object.create(animal);
//  bird.canFly = true;
//  bird.hasFeathers =  true;

//  function birdCan() {
//   for(const key of Object.keys(bird)) {
//     console.log(`${key}: ${bird[key]}`);
//   }
  
//  }
 
//  // call the function birdCan()

//  birdCan();



//  // third taskof the problem with solution

//  function animalCan() {
//   for(const key in Object.keys(bird)) {
//     console.log(`${key}: ${bird[key]}`);
//   }
//  }

//  //call the function to see the output

//  animalCan();


//  // Step 3
// function animalCan() {
//   for (const key in bird) {
//     console.log(`${key}: ${bird[key]}`);
//   }
//   for (const key in bird.__proto__) {
//     console.log(`${key}: ${bird.__proto__[key]}`);
//   }
// }

// // Call the function to see the output
// animalCan();


//  function animalCan() {
//   for (const key in bird) {
//     console.log(`${key}: ${bird._proto_[key]}`);
//   }
// }

// animalCan();





// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach(function(veggie, index) {
//   console.log(`${index}. ${veggie}`);
// });


// //filter method. it will depend on a specific test. the arrays items  that passs the test are returned
// // here is the example with  proper explanation
// // In this code  you will
// const nums = [0,10, 20, 30, 40, 50];
// nums.filter(function(num) {
//   return num > 20;

// })

// // The map methods with proper explanations

// const numbers = [0, 10, 20, 30, 40, 50].map(function(num){
//   return num /10
// })



// //maps and filters methods in js

// const number = [0, 10, 20, 30, 40, 50 ];
// const filteredNums = nums.filter(function(num) {
//   return num > 20;
// });
// console.log("Filtered numbers:", filteredNums); // output [30,40, 50]


// //maps methods
// const dividedNumbers = nums.filter(function(num){
//   return num/10;
// });
// console.log("Divided numbers:", dividedNumbers);


// //Working with objects in JS

// const finalOutput = [];
// const drone = {
//   speed: 100,
//   color: 'yellow'
// }

// const droneKeys = object.keys(drone);
// droneKeys.forEach(function(key) {
//   finalOutput.push(key, drone[key])
// })
// console.log(finalOutput)


// working with Maps in Javascript
// new Map();

// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The runner-up");
// bestBoxers.set(3, " The second-runner up");
// console.log(bestBoxers);
// bestBoxers.get(1); // the champions



// // // Working with set of objects to build a new set we can easily use Set constructor

// // new Set();
// // const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple', 'Mango', 'Jackfruits', 'bengel', 'bengel']
// // const uniqueFruits = new Set (repetitiveFruits);
// // console.log(uniqueFruits);



// // let set = new Set();
// // set.add(1);
// // set.add(2);
// // set.add(3);
// // set.add(2);
// // set.add(1);


// // //spread in javascript

// // const fruits = ['apple', 'pear', 'plum']
// // const berries = ['blueberry', 'strawberry']
// // const fruitsAndBerries = [...fruits, ...berries]// concatenate
// // console.log(fruitsAndBerries); //output of a single array


// // // js in join objects
// // let veggies = ['onion', 'parsley'];
// // veggies = [...veggies, 'carrot', 'beetroot'];
// // console.log(veggies);

// // //convert a string to an array using the spread operator
// // const greeting = "Hello";
// // const arrayofChars = [...greeting];
// // console.log(arrayofChars); 
// // //output

// // // join objects
// // const flying = {wings: 2}
// // const car = {wheels: 4}
// // const flyingCar = {...flying, ...car}
// // console.log(flyingCar) // {wings: 2, wheels: 4}


// // //copy either na object or object or an array into a separate one
// // const car1 = {
// //   speed: 200,
// //   color: 'yellow'
// // }

// // const car2 = {...car1}
// // car1.speed = 201
// // console.log(car1.speed, car2.speed)


// // //copy an array from completely  separated array like this
// // const fruits1 = ['apple', 'pears']
// // const fruits2 = [...fruits1]
// // fruits1.pop()
// // console.log(fruits1, "not", fruits2)


// // //guess the output
// // let obj = {
// //   key: 1,
// //   value: 4
// // };

// // let output = { ...obj };
// // output.value -= obj.key;

// // console.log(output.value);


// // // guess the output
// // function count(...basket) {
// //   console.log(basket.length)
// // }
// // count(10,9,8,7,6);

// // always keeps in mind that for-of loops must  be  always in  iterable  arrays

// //In that lessons we will learn about DOM selectors in  js
// // querySelector()

// //querySelectorAll()

// // queryElementById

// //getElmentsByClassName()


// // Event handling in js

// // user triggered events
// {/* <button type = "button" class = " btn-lg btn-primary" onclick = " clickHandler()">

// </button>


// addEventListener() */}


// // excercise web page content  works

// // // build in promot  method() in js

// let answer =  prompt("what is your name")
// if (typeof (answer) == 'string') {
//   var h1 = document.createElement('h1')
//   h1.innerText = answer;
//   document.body.innerText = '';
//   document.body.appendChild(h1);

// }

// // task solution at hand
//  var h1 = document.createElement('h1')
//  h1.innerText = "Text into the input to make this text change"

//  var input =  document.createElement('input')
//  input.setAttribute('type', 'text')
//  document.body.innerText = ' ';
//  document.body.appendChild(h1)
//  document.body.appendChild(input)

//  input.addEventListener('change', function() {
//   console.log(input.value)
//  })






// // js documents queryselector

// document.querySelector('h1').addEventListener('click', 
//         function() { 
//             console.log('clicked');
//         });
 


// function scopeTest() {
//   var y = 44;

//   console.log(x);
// }

// var x = 33;
// scopeTest();



// // Little Lemon receipt maker excerise

// function getPrices(taxBoolean) {
//   for {
    
//   }
// }



// var age =  18;
// var type = (age>= 18) ? "adult" : "child";
 

// // async await function

// hello = () =>
// {
//   return "Hello World!"
// }

// // promised function in reactjs
// let promiseArgument = (reslove, reject) =>
// setTimeout (() => {
//   let  currTIme = new Date().getTime();
//   if(currTime % 2 === 0) {
//     reslove("Success")
//    } else {
//       reject("failed!!!")
      
//     }
//   }, 2000)

//   let myPromise =  new Promise(promiseArgument);


// // class blueprint for  creating the object
// function car(name, year)
// {
//   this.name = name
//   this.year = year
//   return this;
// }

// let car = car("Ford", 2021)


// // functional  components

// import React from "react";
// const HelloWorld = () => {
//   return (
//     <div>
//       <p>Hello this is rashed</p>
//     </div>
//   )
// }

// export default HelloWorld;



// //Class components
// //state, props, lifecycle methods

// import React from 'react';
// class HelloWorld extends React.Component {
//   render() {
//    return(
//     <div>
//       <p>Hello World!</p>
//     </div>
//    )
//   }
// }
// export default HelloWorld;


// extends React.Component
// HelloWorld and render() method to return JSX code 

// state-- set it to a js object and use   props  anto be the initial state or change the state in lifecycle  meothods. Some  lifeclycle methods are 

// componentDidMount(), componentDidUpdate() , componentWillunmount()
//  you can not use the perfomrs because it's literally use in React Hooks



//  pure components


//  react.Component

//  React.PureComponent---perform shallow comparisons 


//  Higher order components


//  advanced  technique in reaact for reusing compontents logic



//  import React from 'react';
//  import MyComponent from './components/MyComponent';

//  class HelloWorld extends React.Component {
//   render() {
//     return (
//     <div>
//       {this.props.myArray.map((element) => (
//         <MyComponent data = {element} key = {element.key} />>
//       ))}

//     </div>
//     )
//   }
//  }


// //Here i am going to make some nots 
// this.props.myArrayMap




// fareheit to celcisious converator 

// function- input(argument), code, output (return value)

let greetUser = function () {
  console.log('Welcome user')
}

greetUser()
greetUser()
greetUser()


let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)


console.log(value)
console.log(otherValue)


///challenge convert farhrenheit to celsious


let convertFahrenheitToCelsious = function(farenheit) {
  let celcisious = (farenheit-32)* 5 / 9
  return celcisious;
}
let tempOne = convertFahrenheitToCelsious(32)
let tempTwo = convertFahrenheitToCelsious(68)

console.log(tempOne)
console.log(tempTwo)





