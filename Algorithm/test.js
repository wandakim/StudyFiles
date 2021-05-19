'use strict'

const input = ['15 5','1 10 4 9 2 3 8 5 7 6 7 8 9 100 1'];
const NL = input.splice(0,1).toString().split(' ');
const N = NL[0]*1;
const L = NL[1]*1;

const numbersArray = input.toString().split(' ').map(val=>+val);

let answerArray = []; 
for(let i = 0; i < N; i++){
    if(numbersArray[i]<L){
        answerArray.push(numbersArray[i])
    }
}
const answer = answerArray.join(' ');
console.log(answer);


