// 문제
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// 출력
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

// 예제 입력 1 
// 10 5
// 1 10 4 9 2 3 8 5 7 6

// 예제 출력 1 
// 1 4 2 3

// strategy 
// splice를 차례로 두번 해서 각각 N 과 l에 할당한다. 
// N을 이용해 for 돌리고 그 안에서 if input[i]<A 조건을 걸어서 출력 혹은 그냥 return;

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const NL = input.splice(0,1).toString().split(' '); 
const N = NL[0]*1;
const L = NL[1]*1;

const numbersArray = input.toString().split(' ').map(val=>+val);

let answerArray = []; 
for(let i=0;i<N;i++){
    if(numbersArray[i]<L){
        answerArray.push(numbersArray[i])
    }
}
const answer = answerArray.join(' ');
console.log(answer);
// 제출, 틀렸습니다 ..?
// 코드에 이상한 점이 있는지 본다, 없다. 
// 다시 한번 제출해본다, 틀렸습니다.
// 문제에 이상이 있는 것 아닌가? 다시 문제 조건을 확인해본다. 
// 만약에 정수가 큰 수가 들어간다면? 상관이 없다. 
// 모르겠다.. 이따 다시 풀어보고 안되면 찾아보기로 한다. 
// 다시 해봤는데 안되고 있어서 검색,

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const x = input[0].split(' ')[1];
console.log(input[1].split(' ').map(v=>+v).filter(v=>v<x).join(' '));

// 맞았습니다!!
// 꼭 for 사용해서 풀 필요가 없었다. frame 안에서만 찾으려했구나. 


if(n<d){
    while for 
}