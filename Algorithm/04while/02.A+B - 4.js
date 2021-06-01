// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

// 예제 입력 1 
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

//stategy 
// EOF 에 대해 알아보라고 한다. -> End Of File의 약자이다. 텍스트 파일의 끝임을 알리는 문자값. 
// 흠. 일단 지금까지는 더하는 문제에서 입력의 갯수를 줬다. 그냥 그렇게 풀던 방식대로 풀면 어떤가 싶다. 
// 왜냐하면 지금까지 입력의 갯수를 받아서 반복문은 돌린 적이 있지만 그것을 가지고 입력을 끝내거나 한 적은 없기 때문에 자동으로 입력이 끝나면 fs 모듈에서 eof와 같은 처리가 일어나는 것이 아닌가 하고 추측함. 
// 결국 그동안 입력을 받던 방식 그대로 받아서 더하면 될 것 같다는 생각이다. 입력의 갯수는 Array.length()로도 얻을 수 있으니까
// while문으로 푸는 문제이니까 while로 index를 검사해서 n-1까지 뽑아서 나누고 더해서 출력까지 해보기로 한다. 
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let n = input.length()
let i = 0;
while (i = n-1){
    let [a , b] = input.i.split(' ').map(v=>+v);
    console.log(a + b);
    i++;
}

{

const input = ['1 2', '3 4', '0 0'];

let n = input.length
let i = 0;
while (i < n){
    let [a , b] = input[i].split(' ').map(v=>+v);
    console.log(a + b);
    i++;
}
//test.js:8 Uncaught TypeError: Cannot read property 'split' of undefined at test.js:8

// {
// const input = ['1 2', '3 4', '0 0'];
// let i = 0;
// let [a , b] = input.i.split(' ').map(v=>+v);
// console.log(a + b);
// }
// VM353:1 Uncaught SyntaxError: Identifier 'input' has already been declared
//내가 뭔가 착각하고 있는것같다. 
//뜯어보니.. input.i가 아니라 input[i]로 했어야 하는데...

//3
//7
//0
} // test 하면 잘 나오는데 답변 제출시 런타임 에러가 나옴. 
