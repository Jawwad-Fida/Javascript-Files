"use strict";
//Destructuring of a data structure

//destructuring of array --> break down the data structure into smaller elements
const arr = [2, 3, 4];
let [x, y, z] = arr; //orginal array is not affected
console.log(x, y, z);

//skip element
let [a, , b] = arr;
console.log(a, b);

//swap elements using destructuring
let c = 10;
let d = 20;
[c, d] = [d, c];
console.log(c, d);

//returns two values from a function
function getData() {
  return [1, 2];
}

//capture the two values returned from the function
[x, y] = getData();
console.log(x, y);

//nested destructuring
const nested = [1, 2, [3, 4]];
let [i, , [j, k]] = nested;
console.log(j, k);

//set default values when destructuring (extracting elements)
const [p = 1, q = 2, r = 100] = [20, 30];
console.log(p, q, r);
