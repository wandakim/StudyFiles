//일단 최근 풀었던 문제 10950 에서 가장 짧은 것으로 해봄... 채점이 오래걸리는데..시간초과. 
//다른사람 답변 달린 것을 기준으로 실험을 해 봤다
let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")
let answer = ''
for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    answer += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}
console.log(answer)
//매번 console.log 출력 시 시간이 초과된다. 그리고 반복문도 많이 돌수록 시간이 늘어남. 
//하나의 문자열에 A+B와 개행문자를 저장하여 마지막에 한 번 출력함. 이라고 한다. 내 풀이에 적용해본다. 
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let string = '';
const n = +(input.splice(0,1)); 
for(i = 0; i < n; i++){
    let nmbrs = input[i].split(' ').map(val=>+val);
    let [a,b] = nmbrs;
    string += `${a+b}
`;
}
console.log(string); // 맞았습니다!!
// console.log() 를 많이 쓰면 느려질 수 있다는 것에 대해 직감적으로는 알고 있었지만 다시한번 알 수 있었다. 
// 콜백이 여러번 반복되거나 반복문의 중첩 등으로 인해 느려질 수도 있음.
//생각해보니 splice를 안하고  for start i = 1 하면 더 빠를 수 있겠다. 배열에서 splice한 다음에 index 하나씩 당겨야 하니까!