const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const A = parseInt(input[0]);
const B = input[1];

console.log(A * parseInt(B[2]));
console.log(A * parseInt(B[1]));
console.log(A * parseInt(B[0]));
console.log(A * parseInt(B));


--더 간단하게 풀어봄    
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const A = +input[0];
const B = input[1];

console.log(A * (+B[2]));
console.log(A * (+B[1]));
console.log(A * (+B[0]));
console.log(A * (+B));
