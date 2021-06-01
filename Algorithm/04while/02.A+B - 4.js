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
// const input = ['1 2', '3 4', '0 0', ];
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
} 
// test 하면 잘 나오는데 답변 제출시 런타임 에러가 나옴. 왜그럴까? 
// 다시 봐도 잘 모르겠음. 
// 다른 사람 풀이를 보니.. for문으로 풀었더라. while로 푼 사람 하나도 없다. 
// 근데 i < n-1로 하면 잘 됨.. 근데 이해가 되지 않는다. 
// 추측해보건데 n이 내 생각보다 하나 더 많은, 즉 입력 이외에 무언가 하나 더 들어오는건가? 라는 생각을 하게 된다. 

// 알아보니 백준에서 입력을 받으면 마지막에 ""가 들어온다고 한다. 왜 그런거지....? 그래서 내 생각대로 하나가 더 들어오는 것이 맞다. 
// 그렇다면.. 원래 \n으로 나누면 이렇게 들어오는 것이라면 그동안은 n이 주어졌었기 때문에 괜찮았던 것인가? 혼란스럽네;

/**
b = "1 1\n2 3\n3 3\n4 5\n6 7\n7 8\n"
아무래도 테스트 케이스 마지막부분에 \n 이 하나더 추가되어 있나보네요
이러한 문제는 b.trim().split('\n') 으로 해주시면

length-1 을 안해주셔도 됩니다.
https://www.acmicpc.net/board/view/59328
 */ 
// 궁금한 것이 해결되었다. 백준에서 입력 받는 것 때문에 오류가 나는 경우가 까다롭다. 근데 오기가 막 생겨서 그냥 풀고있다
// 앞으로는 내가 잘 한 것 같은데 잘 안된다면 빠르게 그냥 알아보는 것이 나을 것 같다. string.prototype.trim()을 하면 바깥쪽으로부터의 공백을 없에준다(문자열 가운데 공백은 그대로임).

// 결국, trim()을 해 주면 위의 while과 for 둘다 풀이가 정답이다. 다음부터는, 그냥 trim 을 해 주는 것도 좋을 것 같다. 