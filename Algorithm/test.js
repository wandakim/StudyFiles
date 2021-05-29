'use strict'

const input = ['1 2', '3 4', '0 0']

let i = 0;
let [a,b] = input[i].split(' ').map(v=>+v);
while(a !== 0 && b!== 0)
{ 
    console.log(a+b);
    i++;
    break;
}