
/**
 * 템플릿 리터럴이란 자바스크립트에서 문자열을 입력하는 방식
 * var str = 'Hello ES6'와 같은 방식으로 사용하였으나 ES6에서는 백틱(back-tick)이라는 기호(`)를 사용하여 정의
*/
// 1. 문자열 합치기
console.log('my' + ' cat');
console.log(
    `string literals:
    ''''10298347)(*&()*^*&^%*&^%)`
    );


// 2. ' 사용과 줄바꿈
console.log('elli\'screen \nbook'); //\n: 줄바꿈 \t: tab \' 백틱 사용하기.
console.log("elli'screen \nbook");
console.log(
    `elli\`'screen
    book`
    , "tests");

// 3. 변수를 문자열로 변환하기(문자열 안에 변수 집어넣기)
const language = 'Javascript';

const expression1 = 'I love ' + language + '!';
console.log(expression1); // I love Javascript!

const expression2 = `I love ${language}!`; //간편하게 문자열과 변수를 함께 사용할 수 있다. 
console.log(expression2); // I love Javascript!


// 4. ${}를 이용하면 간단한 연산도 할 수 있습니다.
console.log(`1 + 2 = ${1 + 2}`)
const expression3 = `I love ${language.split('').reverse().join('')}!`; //language의 문자열 순서를 역으로 바꾸는 코드
console.log(expression3); // I love tpircsavaJ! 












