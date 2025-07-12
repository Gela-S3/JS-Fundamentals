let process = require('process')
let value = parseInt(process.argv[2])
if(Number.isNaN(value)){
    console.log('Missing number of occurrences')
}else{
    for(let i = 0; i < value; i++){
        console.log(`C is fun`)
    }
}
