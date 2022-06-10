//a special mode is js which makes it easier for us to write secure js code
"use strict"; //has to be the very first statement in the script - very important

//functions

//1) declare function
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}

//call function
let num = addNumbers(10, 20);
console.log(num);

//2) function expression
const func = function (a, b) {
  return a + b;
};

let sum2 = func(10, 20);
console.log(sum2);

//3) Arrow function (shorter and faster to write) --> added in ES6

//functions calling other functions

function mulNum(a, b) {
  let sum = addNumbers(a, b);
  let mul = sum * 2;
  return mul;
}

let ans = mulNum(10, 20);
console.log(ans);
