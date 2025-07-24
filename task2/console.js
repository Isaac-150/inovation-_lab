// Data Types
console.log("Number:", typeof 42);
console.log("String:", typeof "JavaScript");
console.log("Boolean:", typeof true);
console.log("Null:", typeof null);
console.log("Undefined:", typeof undefined);
console.log("Object:", typeof {name: "Isaac", age: 25});
console.log("Symbol:", typeof Symbol('id'));

// Explicit Conversion
let num = 123;
let strNum = String(num);
console.log("Number to String:", strNum, typeof strNum);

let str = "456";
let numStr = Number(str);
console.log("String to Number:", numStr, typeof numStr);

console.log("Boolean conversion:");
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("text"));
console.log(Boolean(""));

// Implicit Conversion
console.log("Implicit conversions:");
console.log("'5' + 2 =", "5" + 2);
console.log("'5' - 2 =", "5" - 2);
console.log("'5' * '2' =", "5" * "2");
console.log("'5' / '2' =", "5" / "2");
console.log("'5' == 5 =", "5" == 5);
console.log("'5' === 5 =", "5" === 5);

// Number/String Conversion Methods
let price = "19.99";
console.log("parseFloat:", parseFloat(price));
console.log("parseInt:", parseInt(price));

let score = 95;
let scoreStr = score.toString();
console.log("toString:", scoreStr, typeof scoreStr);

// Special Cases
console.log("Special cases:");
console.log(Number("123abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(String(null));
console.log(String(undefined));