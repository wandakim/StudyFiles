//https://www.acmicpc.net/problem/2739
/**
 * 문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
* 입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
예제 입력 
2
예제 출력 
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
 */
// 내 코드
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString(); // n이 하나일 때는 꼭 이렇게 한다. 
const n = input*1; // +input으로 해 줘도 됨. 

for(i = 1; i < 10; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}
//계속 오타때문에 한번에 하지 못하는데 주의하기. 

