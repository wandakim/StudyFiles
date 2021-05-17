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

// 1. h === 0. m < 45: h = 23, m+15 | m >= 45 : h, m-45
// 2. h!==0, m < 45: h--, m+15 | m >= 45: h, m-45

input = [10, 10]
const [h, m] = input;
if(h===0){
    if( m < 45 ){
        console.log(`${h+23} ${15+m}`);
    } else {
        console.log(`${h} ${m-45}`);
    }
} else {
     if (m < 45) {
        console.log(`${h-1} ${15+m}`);
    } else {
        console.log(`${h} ${m-45}`);
    }
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

let [h,m] = input;
if(h===0){    
if( m < 45 ){
    console.log(`${h+23} ${15+m}`);
} else {
    console.log(`${h} ${m-45}`);  
}
} else {
 if (m < 45) {
    console.log(`${h-1} ${15+m}`);
} else {
    console.log(`${h} ${m-45}`);
}
} //고친 풀이. 정답. h=0인 경우에 m>=45인 경우를 고려하지 않았던 것이 문제였다. 


// 다른 풀이 연구
let [h, m] = input;

m -= 45;

if(m < 0) {
    m += 60;
    h--;

    if(h === -1) {
        h = 23;
    }
}
// 연산자를 잘 사용하면 훨씬 적게 작성해서 풀이가 가능하다. 
// 우선 직관적으로 45분을 빼 주고, 그 다음 처리하는 것이 직관적으로 다가온다. 
// 위의 첫풀이에서 h값에 관계없이 m>=45일 경우에 m -= 45 인 것이 중복되고 있는데 그것을 없애주는 것이 인상적