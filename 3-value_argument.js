let process = require('process')

let input = process.argv[2]

if(process.argv.length - 2 == 0){
    console.log('No argument')
} else{
    console.log(input)
}
