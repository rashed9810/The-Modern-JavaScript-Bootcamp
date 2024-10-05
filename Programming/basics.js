// Programming Basics: Variables, Functions, Control Structures

// Example: Factorial Function
function factorial(n) {
    if (n < 0) return undefined;
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
