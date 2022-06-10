"use strict";
// Spread operator (...) - unpack elements into an array
// Spread operator is used on the right hand side of =

const arr = [7, 8, 9];

//1) unpack the elements of old array into a new array
const newArr = [1, 2, ...arr];
console.log(newArr);

//2) Pass arguments into a function using spread operator and unpack them
console.log(...newArr);

//3) create shallow copy of an array
const newArrCopy = [...newArr];
console.log(newArrCopy);

//4) Merge two arrays
const merged = [...arr, ...newArr];
console.log(merged);

//Spread operator can also be used in iteratables (built in data structures in JS)
//Iterable data structures are arrays, sets, maps, strings, AND NOT objects.

//unpacking a string
let str = "Fida";
let letters = [...str];
console.log(letters);

function orderItem(a, b, c) {
  console.log(a, b, c);
}

let items = [10, 20, 30];
orderItem(...items);

// ----------------------------------------------------------------

//Rest operator(...) - pack elements into an array & Rest parameters
// Rest operator is used on the left hand side of =, and it is used last

//1) Destructuing
let [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

//2) functions - rest parameters
const addNum = function (...numbers) {
  //packing the parameters into an array --> rest operator
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

addNum(1, 2, 3, 4, 5, 6);
let x = [3, 4, 5];
addNum(...x); //unpacking the array into individual parameters - spread operator
