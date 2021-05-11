const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(val=>+val);
const [a,b] = input;
if(a>0){
    if(b>0){
        console.log(1);
    } else {
        console.log(4);
    }
} else {
    if(b>0){
        console.log(2);
    } else {
        console.log(3);
    }
}
//! 런타임에러. -> fs를 사용하는 것에 대해 백준 사이트에서 오류가 있는 경우가 있다고 함. 앞으로 readline 모듈로 풀어보자. 

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const X = input[0];
  const Y = input[1];

  if(X >0){
        Y > 0 ? console.log(1) : console.log(4)
    }
  if(X <0){
        Y > 0 ? console.log(2) : console.log(3)
    }
    process.exit();
});