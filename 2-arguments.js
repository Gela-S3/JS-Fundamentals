let process = require('process'); //Importing Module
let arg = process.argv ;

if(arg.length - 2 > 0){
    console.log('Argument found')
} else{
    console.log('No argument')
}