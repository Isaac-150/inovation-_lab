//TASK 2:

const student = {
  name: "spidey",
  age: 18,
  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

student.show();
student.age = 19;
student.course = "CS";
console.log(student.name, student.course);