const sizeArg = process.argv[2];

// Try to convert the argument to an integer
const size = parseInt(sizeArg);

// Check if the conversion was successful and the number is positive
if (isNaN(size) || sizeArg === undefined) {
  console.log("Missing size");
} else if (size > 0) {
  // Print the square
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
// If size is 0 or negative, don't print anything