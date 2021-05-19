

// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	127234	72153	63231	57.585%
// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

// 입력
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 예제 입력 1 
// 5
// 예제 출력 1 
//     *
//    **
//   ***
//  ****
// *****

// strategy 
// 이전 문제에 간단하게 strign 조건을 추가해주면 될 것 같다, 아닌듯
// blank 에 공백을 n-1개 넣어놓고 하나씩 빼서 더하기?  


const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const N = input.splice(0, 1) * 1;
const star = [];
const blank = [];

for(i = 0; i < N ; i++) {
    blank.push(' ')
} // 공백을 N 개 생성하고 배열에 담는다. 

for (i = 0; i < N; i++) {
    star.push('*');
    let stars = star.join('');
    blank.pop();
    let blanks = blank.join('');
    console.log(`${blanks}${stars}`)
}
 // 별이 하나 생성 될 때마다 공백이 하나씩 줄어들고, 공백과 별을 스트링으로 합쳐서 출력


// 제출, 맞았습니다!!
// 성능에 초점을 맞추고 풀기보다는 가독성을 신경써서 푸는 것도 중요하다. 
