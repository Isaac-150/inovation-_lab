const students = [
    { name: "isaac", score: 85.7 },
    { name: "sarun", score: 72.3 },
    { name: "nishanth", score: 91.9 },
    { name: "amar", score: 68.5 },
    { name: "bala", score: 79.1 },
    { name: "micheal", score: 95.0 },
    { name: "alice", score: 59.8 }
];

const passingThreshold = 70;
const congratulatoryThreshold = 90;

console.log("--- Student Grades Processor ---");

function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log("\n--- Student Names and Rounded Scores ---");
students.forEach(student => {
    const formattedName = capitalizeFirstLetter(student.name);
    const roundedScore = Math.round(student.score);
    console.log(`${formattedName}: ${roundedScore}`);
});

console.log("\n--- Student Pass/Fail Statuses ---");
const studentStatuses = students.map(student => {
    const roundedScore = Math.round(student.score);
    const status = roundedScore >= passingThreshold ? "Pass" : "Fail";
    const formattedName = capitalizeFirstLetter(student.name);
    return {
        name: formattedName,
        score: roundedScore,
        status: status
    };
});

studentStatuses.forEach(student => {
    console.log(`${student.name} (Score: ${student.score}): ${student.status}`);
});

console.log("\n--- Congratulations for High Scores! ---");
let congratulatedStudentsCount = 0;
for (const student of students) {
    const roundedScore = Math.round(student.score);
    if (roundedScore >= congratulatoryThreshold) {
        const formattedName = capitalizeFirstLetter(student.name);
        console.log(`Congratulations, ${formattedName}! You scored an excellent ${roundedScore}!`);
        congratulatedStudentsCount++;
    }
}

if (congratulatedStudentsCount === 0) {
    console.log("No students met the congratulatory score threshold this time.");
}

console.log("\n--- End of Processing ---");