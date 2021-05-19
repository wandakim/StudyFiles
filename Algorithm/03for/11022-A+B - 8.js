// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

// 예제 출력 
// Case #1: 1 + 1 = 2
// Case #2: 2 + 3 = 5
// Case #3: 3 + 4 = 7
// Case #4: 9 + 8 = 17
// Case #5: 5 + 2 = 7



// 전략. 이전에 풀던 문제와 너무 유사하다. 

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('');
const N = input.splice(0,1)*1;
for (i=1; i<N+1; i++){
    const [a,b] = input[i-1].split(' '); 
    console.log(`Case #${i}: ${a} + ${b} = ${a*1+b*1}`)
}
// 틀렸다. 
// 콘솔에 출력 해 보면 잘 나오는데? 
// 입력처리 문제였다. 백준에서 문제풀이 할 때는 입력처리에 신경을 잘 쓰자. split 할 때 구분자를 잘 입력해주자. 
// 맞았습니다!!
