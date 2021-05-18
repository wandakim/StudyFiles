// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 그냥 for문 돌려서 1~n 배열 만든 다음에 reduce하면 될 것 같다.

const fs = require('fs');
const n = fs.readFileSync('dev/stdin').toString()*1;
let array = [n];
for(i=0;i<n;i++){ // 그냥 0부터 더해도 문제 없을 것 같아서 이렇게함.
    array.push(i);
}
const sum = array.reduce((a,b)=>a+b);
console.log(sum);