let process = require('process')

let input = process.argv[2]

if(process.argv[2] === undefined){
    console.log('No argument')
} else{
    console.log(input)
}
