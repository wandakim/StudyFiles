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
//! 런타임에러. -> 경로 문제로 인해 fs를 사용하는 것에 문제가 있음. readline으로 풀어보자. 

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

//나의 풀이를 적용해서 풀어봄
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

  if(X>0){
    if(Y>0){
        console.log(1);
    } else {
        console.log(4);
    }
} else {
    if(Y>0){
        console.log(2);
    } else {
        console.log(3);
    }
}
    process.exit();
});

// 정답은 맞다. fs모듈이 문제가 되는 문제가 몇 있는 것 같음. 안될 때는 readline으로 풀어야겠다. 

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

  if(X>0){
    (Y>0 ? console.log(1) : console.log(4))
} else {
    (Y>0 ? console.log(2) : console.log(3))
}
    process.exit();
});


//최종 풀이. 삼항연산자 활용. 

