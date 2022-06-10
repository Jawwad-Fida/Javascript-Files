"use strict";

//looping over objects

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

//1) over property names - keys

const properties = Object.keys(person);
console.log(properties);
console.log(properties.length);

for (let key of Object.keys(person)) {
  console.log(key);
}

//2) over property values - values
const values = Object.values(person);
console.log(values);

//3) over property entries - both keys and values
const entries = Object.entries(person);
console.table(entries);

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
