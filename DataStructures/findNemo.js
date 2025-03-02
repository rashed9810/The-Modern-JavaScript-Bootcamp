// //#1 -- For loop in Javascript.
// const nemo = ['nemo'];

// function findNemo1(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo1(nemo); 


// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
  }

  
  
  const array = [1,2,3,4,5];
  function getFirstElement(array) {
    return array[0]; // সর্বদা প্রথম এলিমেন্ট ফেরত দেবে।
}
console.log(getFirstElement(array));


//linear time complexity
function printAllElements(array) {
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}
