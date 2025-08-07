//TASK 3:


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 10; i <= 20; i++) {
    if (isPrime(i)) {
        console.log("First prime number found:", i);
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;  
    console.log(i); 
}