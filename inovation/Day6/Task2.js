//TASK 2:

const student = {
  name: "Isaac",
  age: 18,
  displayInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

student.displayInfo();

console.log(student.name);
console.log(student["age"]);

student.age = 19;
student.name = "Deepthi T";
console.log(student);

student.greet = function() {
  console.log(`Hello, I am ${this.name}`);
};

student.greet();