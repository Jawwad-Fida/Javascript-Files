"use strict";
//Arrays --> for structured data. Objects --> for unstructured data.

//objects (data structure) in JS
//an object is like a dictionary in Python. It is a collection of key-value pairs. Order of the elements does not matter here.
//key is the name of the object and value is the value of the object.
//we access object properties using dot notation.

//we can also add functions as key-value pair (function expression)
//this keyword refers to an object (the object calling the method).
const person = {
  name: "Fida",
  age: 23,
  hobbies: ["coding", "reading", "eating"],
  addNum: function (a) {
    this.age = this.age + a;
    return this.age;
  },
  getSummary: function () {
    return `${this.name} is ${this.age} years old.`;
  },
};
console.log(person);

//accessing the object
console.log(person.name);
console.log(person["hobbies"][0]);
console.log(person["name"]); //preferred

//adding a new key-value pair to the object
person["job"] = "student"; //preferred
person.email = "gmail";
console.log(person);

//object methods
console.log(person["addNum"](3));
console.log(person["age"]);

console.log(person["getSummary"]());
