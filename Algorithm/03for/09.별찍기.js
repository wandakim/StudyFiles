// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1 
// 5
// 예제 출력 1 
// *
// **
// ***
// ****
// *****

// 전략 for안에 for 돌리기.
//전략1
// N 변수에 number 변환해서 저장하고
// for 돌려서 1부터 n까지 i로 전달 해주고 
// for 돌려서 n개의 * 문자열을 만들고 출력한다. 
// for 두번 써야하나? 

//전략2
// 배열에 별 n개 넣어두고 for push 
// slice join 해서 출력. 

// 2번이 가독성 더 좋을 것 같아서 2로 해보겠다. 


const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const N = input.splice(0, 1) * 1;
const star = [];
for (i = 0; i < N; i++) {
    star.push('*')
    console.log(star.join(''));
}
//제출, 맞았습니다!!