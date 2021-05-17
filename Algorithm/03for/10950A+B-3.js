
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 예제 입력 1 
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 예제 출력 1 
// 2
// 5
// 7
// 17
// 7

// 풀이계획 - 
// 1. 입력들어온 것을 input배열에 넣어서 첫 값을 splice 해서 const n에 할당. 
// 2. 남은 값들을 각각 split 해서 2개씩 들어있는 배열로 만든 후 for문을 이용해서 더하여 출력. 
//reduce 함수 사용


const aar = [a,b];
const bar = [c,d];
const car = [e,f];
const abcar = [aar, bar, car];
console.log(abcar);

// 혹시 배열안의 배열이 가능한가? : 안됨. 

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const n = +(input.splice(0,1));
for(i = 0; i < n; i++){
    let nmbrs = input[i].split(' ').map(val=>+val);
    let sum = nmbrs.reduce((a,b)=>a+b);
    console.log(sum);
}
// reduce 를 쓰면 값이 몇개씩 들어와도 처리가 가능할 것이라서 그렇게 해봄. 그냥 [a,b] = nmbrs 해도 될듯. 

input = ['2','1 2','2 3']
const n = +(input.splice(0,1));

for(i = 0; i < n; i++){
    let nmbrs = input[i].split(' ').map(val=>+val);
    let [a,b] = nmbrs;
    console.log(a+b);
}
//3 5 로 잘 나옴. 

input = ['2','1 2','2 3']
const n = +(input.splice(0,1));

for(i = 0; i < n; i++){
    let nmbrs = input[i];
    console.log(nmbrs[0]*1+nmbrs[2]*1);
}
// 문자열을 index로 접근해서 풀 수도 있음. 이게 가장 간단하기는 하나 가독성이 많이 떨어지는 느낌이다. 


