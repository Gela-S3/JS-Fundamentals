function add(a, b) {
  return a + b;
}

// Get command line arguments (skip first two elements which are node and script path)
const args = process.argv.slice(2);

// Convert arguments to integers (or NaN if not numbers)
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

// Call the add function and print the result
console.log(add(num1, num2));