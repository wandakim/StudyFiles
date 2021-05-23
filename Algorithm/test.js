'use strict'

const   input = ['1 2','3 4 3 4 2 3 4'];
const NL = input.splice(0,1).toString().split(' '); 
const N = NL[0]*1;
const L = NL[1]*1;

console.log(input);
console.log(input[0]);
console.log(input.toString());
const numbersArray = input[0].toString().split(' ').map(val=>+val);

console.log(numbersArray);

// 근데 틀린 이유를 모르겠다. input.toString() 그리고 input[0] 둘다 같은 문자열을 콘솔에 출력하는데 왜 전자만 오류가 나는가? 
// 애초에 배열 안에 원소 하나 들어 있는 것을 그냥 꺼내는 것이 나은 방법이기는 한데 무엇 때문에 틀리는지는 모르겠다. 
// 일단 배열에 원소가 하나 남았을 경우는 그냥 꺼내서 쓰자.. 