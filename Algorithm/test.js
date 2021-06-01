'use strict'

const input = ['1 2', '3 4', '0 0', '9 10'];
const n = input.length
for (let i = 0; i < n-1; i++){
    let [a , b] = input[i].split(' ').map(v => +v);
    console.log(a);
    console.log(b);
}
//test.js:8 Uncaught TypeError: Cannot read property 'split' of undefined at test.js:8

// {
// const input = ['1 2', '3 4', '0 0'];
// let i = 0;
// let [a , b] = input.i.split(' ').map(v=>+v);
// console.log(a + b);
// }
// VM353:1 Uncaught SyntaxError: Identifier 'input' has already been declared
//내가 뭔가 착각하고 있는것같다. 
//뜯어보니.. input.i가 아니라 input[i]로 했어야 하는데...

//3
//7
//0

// 