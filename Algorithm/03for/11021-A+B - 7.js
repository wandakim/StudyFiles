// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.
// Case #1: 2
// Case #2: 5
// Case #3: 7
// Case #4: 17
// Case #5: 7

// 전략
// 1. 입력을 input에 배열로 받아와서저장
// 2. 테스트케이스를 따로 splice해서 n에 저장. 
// 3. for 돌면서 배열의 요소에 차례로 접근해서 split 하고 destructuring으로 a, b에 할당
// 4. a,b에 접근해서 string의 형태로 출력. tl 이용 

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const N = input.splice(0,1)*1;
for (i=1; i<N+1; i++){
    const [a,b] = input[i].split(' ');
    console.log(`Case #${i}: ${a*1+b*1}`)
}
// 틀렸음. 재시도 
const input = [2, '2 4', '3 6'];
const N = input.splice(0,1)*1;
for (i=1; i<N+1; i++){
    const [a,b] = input[i-1].split(' '); //* 배열의 상태를 잘 생각하지 못했다. 원본 변경이 될 때 주의하고 인덱스를 다룰때도 주의. 
    console.log(`Case #${i}: ${a*1+b*1}`)
}
// 맞았습니다!!


