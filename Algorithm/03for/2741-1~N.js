// 문제
// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

/**strategy
 * N을 받아 저장하고 
 * for
 * string으로 모아서 출력
 */


//내 풀이

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
const N = input*1;
let answer = '';
for(i=1; i < N+1; i++){
    answer += `${i}
`
}
console.log(answer);

// 맞았습니다!! 
// 오타와 실수를 줄이자. 