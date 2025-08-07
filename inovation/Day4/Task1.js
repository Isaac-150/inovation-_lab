//TASK 1:

// Math & String Built-in Functions
console.log("--- Task 1: Math & String Functions ---");

let num = Math.random() * 100;
console.log("Random number:", num);
console.log("Rounded:", Math.round(num));
console.log("Floor:", Math.floor(num));
console.log("Ceil:", Math.ceil(num));
console.log("Max:", Math.max(12, 55, 99));
console.log("Min:", Math.min(12, 55, 99));

let str = "innovation lab";
console.log("Uppercase:", str.toUpperCase());
console.log("Substring (0,5):", str.substring(0, 5));
console.log("Includes 'lab'?", str.includes("lab"));
console.log("Replace 'lab' with 'hub':", str.replace("lab", "hub"));