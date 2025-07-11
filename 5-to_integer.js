let process = require('process')

let num1= parseInt(process.argv[2])

if(Number.isNaN(num1)){
    console.log('Not a number')
} 
else{
    console.log(`My number is: ${num1}`)
}