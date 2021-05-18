// 문제
// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

/**접근
 * 변수에 N 저장 
 * for 돌려서 
 * string으로 묶어서 
 * reverse 해서 출력 ( 테스트를 한번 해보자. \n이 어떻게 될지. template literal도 어떻게 될지 봐야할듯 )
 */

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
const N = input*1;
let A = '';
for(i=1;i<N+1;i++){
    A += `${i}
`
}
console.log(A.split('').reverse().join('')) // 잘 되는데 제일 앞에 있는거 \n을 없애야함.  
// ? split 하고 나서 pop()을 하려는데 잘 되지 않는다. test 해보자. 
//console.log(plants.pop());
//expected output: "tomato" -> pop을 하고 원본을 출력해야지 pop을 출력하면 pop된 것이 나옴. slplice를 변수에 할당해서 출력하는 것과 유사한듯. 

const N = input*1;
let A = '';
for(i=1;i<N+1;i++){
    A += `${i}
`
}
const B = A.split(''); // 여기에서 10이 넘어가는 수가 있을 때 10은 1 과 0으로 나누어진다. 이때부터 값이 이상해진다. 
B.pop(); 
console.log(B.reverse().join(''));

// 줄바꿈은 문자 하나로 인식이 되고 있다. 
// 뒤에 줄바꿈 하나를 날려줘야 했다. 
// 틀림. 큰 숫자를 출력 해 보았더니 이상한 순서로 출력이 되었다. 왜 그럴까? 

//그냥 바로 배열을 만들어서 계속 푸쉬해주고 reverse.join(\n)해서 풀어봤다. 
const input = 9;
const N = input*1;
let A = [];
for(i=1;i<N+1;i++){
    A.push(i);
}
console.log(A.reverse().join('\n'));  // 맞았습니다!!

// 문자열을 각각 나누려고 split('')를 쓸 수는 있으나 10 이상의 수의 경우에 사용해서는 안되겠다. 