// let process = require('process'); //Importing Module
// let arg = process.argv ;

// if(arg.length - 2 > 0){
//     console.log('Argument found')
// } else{
//     console.log('No argument')
// }
/**************************************************************** */
// Get the command-line arguments.
// process.argv is an array where:
// process.argv[0] is 'node'
// process.argv[1] is the path to the script file
// Subsequent elements are the actual arguments passed by the user.
const args = process.argv;

// Calculate the number of arguments passed by the user.
// We subtract 2 because the first two elements are 'node' and the script path.
const numberOfArguments = args.length - 2;

// Check the number of arguments and print the corresponding message.
if (numberOfArguments === 0) {
  // If no arguments are passed (only 'node' and script path are present)
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed
  console.log("Argument found");
} else {
  // If more than one argument is passed
  console.log("Arguments found");
}