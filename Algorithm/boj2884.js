const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(val=>+val);
const[a,b] = input;
let H = 0;
let M = 0;
((b - 45) < 0 ? H = a-1, M = 105 - H : H = a, M = b-45 )
console.log(`${H} ${M}`)

// 첫 시도 - 에러 . 저렇게 사용은 안되나봄. 

// 시간이 입력되면 45분 전으로 당기기. 
// 시간과 분이 따로 들어온다. 

// 2. 분이 45보다 작을 경우 : 시간-1 105-분
// 1. 시간이 0000~0045일 경우: 시간 = 23 분 = 105-분
// 3. 1,2번에 해당하지 않는 경우 시간 분 - 45

input = [10, 10]
const [h, m] = input;
if( h===0 && m < 45 ){
    console.log(`${23} ${15+m}`);
} else if (m < 45) {
    console.log(`${h-1} ${15+m}`);
} else {
    console.log(`${h} ${m}`);
}

// 콘솔과 node 로 해봐도 잘 되는데 백준에서 안됨. 


let num1 = Number(input[0]);  // H
let num2 = Number(input[1]);  // M

num2 -= 45;

if(num2 < 0) {
    num2 += 60;
    num1--;

    if(num1 === -1) {
        num1 = 23;
    }
}

console.log(num1 + ' ' + num2);

// 뭐가 문제인지 다름 풀이 보면서 수정 해보는중
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(val=>+val);;
let [num1, num2] = input;

num2 -= 45;

if(num2 < 0) {
    num2 += 60;
    num1--;

    if(num1 === -1) {
        num1 = 23;
    }
}

console.log(num1 + ' ' + num2);
// 형변환 등 윗부분의 문제는 아니다. 풀이에 문제가 있다. 