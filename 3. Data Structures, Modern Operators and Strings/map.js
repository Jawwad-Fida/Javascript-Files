//Maps

//a map is a data structure that stores key-value pairs
//difference: in objects, keys are always strings, but in maps, keys can be of any type.

const rest = new Map(); //empty map

//set(key,value) -> add item to map
rest.set("name", "Classic Fida Res");
rest.set(1, "Dhaka, Bangladesh");
rest.set(2, "Dubai, UAE");

//chaining add items
rest.set("categories", ["Rice", "Burger"]).set("open", 10).set("close", 22);
rest.set(true, "We are open");
rest.set(false, "We are closed");

console.log(rest);

//read data from map --> get(key)
console.log(rest.get("name"));
console.log(rest.get("categories"));

let time = 21;
let is_open = time > rest.get("open") && time < rest.get("close");
console.log(rest.get(is_open));

//check if map contains a certain key --> has(key)
console.log(rest.has("name"));

//delete item from map --> delete(key)
rest.delete(2);

console.log(rest);

//get length of map --> size
console.log(rest.size);

//remove all elements from map --> clear()
//rest.clear();

//set arrays as keys
let arr = [1, 2, 3];
rest.set(arr, "Array of numbers");
console.log(rest.get(arr));

//setting objects as keys
//e.g. selecting h1 tag in html browser
let h1 = document.querySelector("h1");
rest.set(h1, "Heading");
console.log(rest);

//create maps in another way
const rest2 = new Map([
  ["name", "Classic Fida Res"],
  [1, "Dhaka, Bangladesh"],
  ["categories", ["Rice", "Burger"]],
  ["open", 10],
  ["close", 20],
]);

//convert objects to map
//obj_map = new Map(Object.entries(person_obj));

//convert map to array
//arr_map = Array.from(map);

//Maps iteration

for (let [keys, values] of rest2) {
  if (typeof keys === "number") {
    console.log(`${keys} is a number`);
  }
}
