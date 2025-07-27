const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["Apple", "Banana", "Cherry", "Date"];

const outputForEach = document.getElementById('outputForEach');
const outputMap = document.getElementById('outputMap');
const outputForIn = document.getElementById('outputForIn');
const outputForOf = document.getElementById('outputForOf');
const outputComparison = document.getElementById('outputComparison');
const outputQuiz = document.getElementById('outputQuiz');

function appendToSpecificOutput(element, text) {
    element.textContent += text + '\n';
    console.log(text);
}

function clearSpecificOutput(element) {
    element.textContent = '';
}

function clearAllOutputs() {
    clearSpecificOutput(outputForEach);
    clearSpecificOutput(outputMap);
    clearSpecificOutput(outputForIn);
    clearSpecificOutput(outputForOf);
    clearSpecificOutput(outputComparison);
    clearSpecificOutput(outputQuiz);
}

function runForEachDemo() {
    clearSpecificOutput(outputForEach);
    console.log("\n--- Running forEach() Demo ---");
    appendToSpecificOutput(outputForEach, "--- Using forEach() to Print Elements ---");
    numbers.forEach((number, index) => {
        appendToSpecificOutput(outputForEach, `Number at index ${index}: ${number}`);
    });

    appendToSpecificOutput(outputForEach, "\n--- Using forEach() with Fruits ---");
    fruits.forEach(fruit => {
        appendToSpecificOutput(outputForEach, `Fruit: ${fruit}`);
    });
}

function runMapDemo() {
    clearSpecificOutput(outputMap);
    console.log("\n--- Running map() Demo ---");
    appendToSpecificOutput(outputMap, "--- Using map() to Transform (Square Numbers) ---");
    const squaredNumbers = numbers.map(number => {
        return number * number;
    });
    appendToSpecificOutput(outputMap, "Original Numbers: [" + numbers.join(', ') + "]");
    appendToSpecificOutput(outputMap, "Squared Numbers (using map): [" + squaredNumbers.join(', ') + "]");

    appendToSpecificOutput(outputMap, "\n--- Using map() to Transform (Uppercase Fruits) ---");
    const uppercaseFruits = fruits.map(fruit => {
        return fruit.toUpperCase();
    });
    appendToSpecificOutput(outputMap, "Original Fruits: [" + fruits.map(f => `'${f}'`).join(', ') + "]");
    appendToSpecificOutput(outputMap, "Uppercase Fruits (using map): [" + uppercaseFruits.map(f => `'${f}'`).join(', ') + "]");
}

function runForInDemo() {
    clearSpecificOutput(outputForIn);
    console.log("\n--- Running for-in Demo ---");
    for (const index in numbers) {
        appendToSpecificOutput(outputForIn, `Index: ${index}, Value: ${numbers[index]}`);
    }
}

function runForOfDemo() {
    clearSpecificOutput(outputForOf);
    console.log("\n--- Running for-of Demo ---");
    appendToSpecificOutput(outputForOf, "--- Using for-of Loop (Iterates over Values) ---");
    for (const number of numbers) {
        appendToSpecificOutput(outputForOf, `Value: ${number}`);
    }

    appendToSpecificOutput(outputForOf, "\n--- Using for-of Loop with Fruits ---");
    for (const fruit of fruits) {
        appendToSpecificOutput(outputForOf, `Fruit Value: ${fruit}`);
    }
}

function runComparison() {
    clearSpecificOutput(outputComparison);
    console.log("\n--- Running Comparison Demo ---");
    appendToSpecificOutput(outputComparison, "--- How Each Loop Works (Super Simple) ---");
    appendToSpecificOutput(outputComparison, "  - forEach(): Does something for each item. No new list.");
    appendToSpecificOutput(outputComparison, "  - map(): Changes each item. Makes a NEW list.");
    appendToSpecificOutput(outputComparison, "  - for-in: Gets item numbers (indexes). Better for objects.");
    appendToSpecificOutput(outputComparison, "  - for-of: Gets each actual item. Very easy to use.");
}

function runQuiz() {
    clearSpecificOutput(outputQuiz);
    console.log("\n--- Running Quiz Demo ---");
    appendToSpecificOutput(outputQuiz, "--- Quiz Question ---");
    const resultOfFloor = Math.floor(4.7);
    appendToSpecificOutput(outputQuiz, `Math.floor(4.7) returns: ${resultOfFloor}`);
    appendToSpecificOutput(outputQuiz, "Explanation: Math.floor() rounds a number DOWN to the nearest integer.");
}

function runAllDemos() {
    clearAllOutputs();
    console.clear();
    console.log("--- Running All Demos ---");

    runForEachDemo();
    console.log("\n------------------------------\n");
    runMapDemo();
    console.log("\n------------------------------\n");
    runForInDemo();
    console.log("\n------------------------------\n");
    runForOfDemo();
    console.log("\n------------------------------\n");
    runComparison();
    console.log("\n------------------------------\n");
    runQuiz();
    console.log("\n--- All Demos Completed ---");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('runAllBtn').addEventListener('click', runAllDemos);
    document.getElementById('clearAllOutputBtn').addEventListener('click', clearAllOutputs);

    document.getElementById('runForEachBtn').addEventListener('click', runForEachDemo);
    document.getElementById('runMapBtn').addEventListener('click', runMapDemo);
    document.getElementById('runForInBtn').addEventListener('click', runForInDemo);
    document.getElementById('runForOfBtn').addEventListener('click', runForOfDemo);
    document.getElementById('runComparisonBtn').addEventListener('click', runComparison);
    document.getElementById('runQuizBtn').addEventListener('click', runQuiz);
});