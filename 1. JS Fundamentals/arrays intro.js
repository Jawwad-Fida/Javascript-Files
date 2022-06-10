"use strict";

//arrays (data structure) in JS

//arrays in js have no fixed length and it contain values of different types
//declare arrays using const keyword

//Introduction to Arrays
const names = ["John", "Jane", "Mary"];
console.log(names);

console.log(names[0]);

names[0] = "Fida";
console.log(names);

console.log(names.length);

//Methods - array operations

//push - add element to the end of the array
names.push("Moumy");
console.log(names);

//unshift - add element to the beginning of the array
names.unshift("Jesmine");
console.log(names);

//remove elements

//pop - remove element from the end of the array
let removed = names.pop();
console.log(names);
console.log(removed);

//shift - remove element from the beginning of the array
removed = names.shift();
console.log(removed);
console.log(names);

//indexOf - returns the index of the first element in the array that matches the specified value
let loc = names.indexOf("Mary");
console.log(loc); //returns -1 if element does not exist

//includes (ES6) - returns True if element is in array or False if not
let isloc = names.includes("Mary");
if (isloc) {
  console.log("Friend available");
} else {
  console.log("No friend");
}
