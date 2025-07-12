function factorial(n) {
  // Base case: factorial of 0, 1, or NaN is 1
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Recursive case: n * factorial(n - 1)
  return n * factorial(n - 1);
}

// Get first argument and convert to integer
const num = parseInt(process.argv[2]);

// Compute and print factorial
console.log(factorial(num));