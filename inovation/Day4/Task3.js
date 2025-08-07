//TASK 3:

// Loops
console.log("\n--- Task 3: Loops ---");

let fruits = ["apple", "banana", "cherry"];

console.log("Using forEach:");
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));

console.log("Using map to uppercase:");
let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits);

console.log("Using for-in (indexes):");
for (let index in fruits) {
  console.log(`Index ${index}: ${fruits[index]}`);
}

console.log("Using for-of (values):");
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}