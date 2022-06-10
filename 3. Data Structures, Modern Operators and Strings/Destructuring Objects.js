"use strict";
//Destructuring of a data structure - very important in JS

//Destructuring of objects
console.log("NEW");

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  city: "New York",
  isgraduated: true,
};
console.log(person);

//Destructuring - useful when getting data from API (data from API [3rd party data] comes in a form of an object)

//1) need to write exact property names to extract from the object
const { age, city, isgraduated } = person;
console.log(age, city, isgraduated); //creates brand new variables

//2) what if we want the variables names to be different from property names
const { name: firstName, age: ageofPerson } = person; //property name of object: new name of variable
console.log(firstName, ageofPerson);

//setting default values to properties in case it doesn't exist - useful when getting data from API
const { name: Name = "John", age: PersonAge = 30, ismarried = false } = person;
console.log(Name, PersonAge, ismarried);

//swap elements using destructuring in objects - mutating the variables
let z1 = 111;
let z2 = 222;
const obj2 = { z1: 20, z2: 30, z3: 40 };
({ z1, z2 } = obj2); //wrap the destructuring in parenthesis
console.log(z1, z2); //z1 and z2 have been replaced

//VERY common when getting data from API in Javascript (IMPORTANT)
// a function with a lot of parameters can be hard to know the order of the arguments
//pass the obj as a parameter to the function, function will extract the values from the object
const person2 = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  city: "New York",
  isgraduated: true,
  getResults: function (obj) {
    console.log(obj);
  },
  //destructuring the object when passed to the function
  getResults2: function ({ CGPA = 2.0, is_complete = false, major = "None" }) {
    //initial set with default values
    //variables names should be exactly the same as the property names in the object (order does not matter)
    //now we have variables containing the object informatiopn as parameters
    console.log(CGPA, is_complete, major);
  },
};

//call the function with the object (containing options) as a parameter
const results_obj = {
  CGPA: 3.8,
  credits: 138,
  major: "Computer Science",
};
person2["getResults"](results_obj);
person2["getResults2"](results_obj);
