let process = require('process')

let num1= parseInt(process.argv[2])

if(Number.isNaN(num1)){
    console.log('Not a number')
} 
else{
    console.log(`My number: ${num1}`)
}
// if(process.argv[2]){
//     let value = Number(process.argv[2]);
//     if (Number.isInteger(value)){
//         console.log("HElal");
//     } else if(Number.parseInt(value)){
//         console.log(`My`);
//     }
//     else{
//         console.log("Not a number");
//     }
// }else{
//     console.log('Not a number')
// }