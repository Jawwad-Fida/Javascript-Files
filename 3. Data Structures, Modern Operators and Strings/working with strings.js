"use strict";

//working with strings - check out mdn documentation for more string methods

//part 1

let str = "Mohammed Jawwadul Islam Fida";
console.log(str[0]);
console.log(str[1]);
//indexOf(), lastIndexOf()
console.log(str.length);

console.log(str.indexOf("d"));
console.log(str.lastIndexOf("l"));
console.log(str.indexOf("Mohammed"));
//space is counted as a character in string

//string slicing - getting substrings
console.log(str.slice(4)); // index 4 to end - returns a new string (not affecting the orginal string)
console.log(str.slice(4, 8)); // index 4 to index 7 (n-1)

console.log(str.slice(0, str.indexOf(" ") + 1)); //index 0 to first space

console.log(str.slice(-4)); // returns last 4 characters

//part 2

//exercise: fix capitalization
let ptr = "jOnAS";
let ptrlower = ptr.toLowerCase();
let ptrCorrect = ptrlower[0].toUpperCase() + ptrlower.slice(1);
console.log(ptrCorrect);

let email = " Skyabyss".trim();
console.log(email);
//trim() removes white spaces from the beginning and end of the string
//trimStart() removes white spaces from the beginning of the string
//trimEnd() removes white spaces from the end of the string

//replace
let init_price = "288,97euro";
let price = init_price.replace(",", ".").replace("euro", "$");
console.log(price);

//check if a string exists
let str1 = "The A320 is the latest airbus added to the terminal";
console.log(str1.includes("A320"));
console.log(str1.includes("fida"));
console.log(str1.startsWith("The"));
console.log(str1.endsWith("terminal"));

//part 3

//split
let [firstName, lastName] = "Mohammed Jawwadul".split(" ");
console.log(firstName);
console.log(lastName);

let arr = "Mohammed,Jawwadul,Islam,Fida".split(",");
console.log(arr);

//join
let newName = ["Mohammed", "Jawwadul", "Islam", "Fida"].join(" ");
console.log(newName);

//padding - adding number of characters until a certain length
const msg = "Go to gate 23";
let new_msg = msg.padStart(20, "+");
console.log(new_msg);

const msg2 = "Go to gate 23";
let new_msg2 = msg2.padEnd(30, "*");
console.log(new_msg2);

//repeat - allows us to repeat the same string multiple times
const warning = "Hurrican inbound. Pls evacuate immediately! ";
console.log(warning.repeat(5));
