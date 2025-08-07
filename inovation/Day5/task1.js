//TASK 1:

const nums = [5, 15, 8, 25];
const result = nums.filter(n => n > 10);
console.log(result);

const sum = nums.reduce((a, b) => a + b, 0);
console.log(sum);

const product = nums.reduce((a, b) => a * b, 1);
console.log(product);

const words = ["Hi", "there"];
const joined = words.reduce((a, b) => a + " " + b);
console.log(joined);

const sliced = nums.slice(1, 3);
console.log(sliced);

let arr = [1, 2, 3, 4];
arr.splice(1, 2, 9, 10);
console.log(arr);

const a = [1, 2], b = [3, 4];
const merged = [...a, ...b];
console.log(merged);