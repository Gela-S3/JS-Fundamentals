let process = require('process')

let num1= process.argv[2]

if(process.argv[2] == undefined){
    console.log('Not a number')
} 
else if(isNaN(process.argv[2])){
    console.log('Not a number')
}
else{
    console.log(`My number is: ${parseInt(process.argv[2])}`)
}