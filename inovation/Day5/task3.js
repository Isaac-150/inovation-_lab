//TASK 3:

const numbers = [5, 12, 8, 20, 3, 15];
const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const words = ["JavaScript", "is", "fun"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence);

const fruits = ["apple", "banana", "cherry", "mango", "grape"];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

const colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2, "purple", "orange");
console.log(colors);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const clonedArr = [...arr1];
const mergedArr = [...arr1, ...arr2];
console.log(clonedArr);
console.log(mergedArr);