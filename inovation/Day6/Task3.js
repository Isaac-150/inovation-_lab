//TASK 3:

const user = { name: "isaac", age: 20, city: "Chennai" };
const { name, age } = user;
console.log(name);
console.log(age);

const settings = { theme: "dark" };
const { theme, fontSize = 14 } = settings;
console.log(theme);
console.log(fontSize);

const student = {
  id: 101,
  personal: {
    firstName: "Isaac",
    lastName: "Samuel"
  }
};
const { personal: { firstName, lastName } } = student;
console.log(firstName);
console.log(lastName);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const cloned = { ...obj1 };
const merged = { ...obj1, ...obj2 };
console.log(cloned);
console.log(merged);