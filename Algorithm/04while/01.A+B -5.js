
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 입력의 마지막에는 0 두 개가 들어온다.

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.
//예제 입력 1 
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0
// 예제 출력 1 
// 2
// 5
// 7
// 17
// 7


//strategy
//배열로 두개씩 들어오면 하나씩 차례로 꺼내서 더하고 더한 값이 0이 아니면 출력한다.  

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
let i = 0;
while(a+b !== 0)
{ 
    let [a,b] = input[i].split(' ').map(v=>+v);
    console.log(a+b);
    i++;
}
// 제출1, 런타임 에러. test 진행

// 문제 조건을 보니 b 는 음수일 수 있다. 
// 논리 연산자를 사용해서 풀이 시도. 
let i = 0;
while(a !== 0 && b!== 0)
{ 
    let [a,b] = input[i].split(' ').map(v=>+v);
    console.log(a+b);
    i++;
}

// 왜 틀렸을까.. while 안에 논리연산자를 사용하면 안되나?  
// 논리 연산자 사용에는 문제가 없었다. test를 돌려보니 밖에서 정해진 a,b를 가지고 while이 시작될 때 검사를 한다. 즉, undefined가 된다. 

input.forEach((e)=>{
    let [a,b] = e.split(' ').map(v=>+v);
    while(a !== 0 && b!== 0) 
    { 
        console.log(a+b);
        break;
    }
}    
)
// 맞았습니다!! 
// 하나씩 가져와서 쪼개고 while을 돌렸다. 그리고 break 로 멈추어 줬다.
// 근데 이렇게 하려면 차라리 if 하는거나 다름이 없다는 생각이 듬. 
input.forEach((e)=>{
    let [a,b] = e.split(' ').map(v=>+v);
    if(a !== 0 && b!== 0) 
    { 
        console.log(a+b);
    }
}    
) 
// if 를 사용하면 break 할 필요도 없다. 
// while로 풀어보라는 것 같은데 다른 언어를 보니 while을 이용하면 간편하게 풀 수 있는 방법이 있는 것 같다. 
// 다른 언어는 입력을 바로바로 받아서 처리를 할 수 있어서 그런가 입력처리가 단순해보인다. 
