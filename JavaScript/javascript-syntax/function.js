// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value 

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doDomething, command, varb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS // *

function printHello() {
    console.log('Hello World!');
}
printHello();

function log(message) {
    console.log(message); // *
}
log('Hello');
log(1234); // automatically typed string. ( should learn TS)

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
    obj.name = 'coder';
}
const wanda = { name: 'wanda'};
changeName(wanda);
console.log(wanda); 

// 3. Default parameters (added in ES6)

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi') // undefined -> 'unknown'

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }  
    for (const arg of args) {
        console.log(arg);   // *
    } 
    args.forEach((arg) => console.log(arg));// *
} 
printAll('dream', 'coding', 'wanda');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() { 
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = `hello I'm child message`;
        printAnother(); 
    }
    // console.log(childMessage) // Error!
}
printMessage();
// return undefined 

// 6. Return a value   // *
function sum(a, b) {
    return a + b;
}
const result = sum(1,2); 
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic.. 가독성이 떨어진다.   // *
    }
}
// good
function upgradeUser(user) {
    if (user.point <=10) {
        return; // *   // if doesn't have return, the default is 'return undefined' 
    }
    //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it. 
const print = function () { // anonumous function
    console.log('print');
};
print(); 
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonuymous function 
const printYes = function () {
    console.log('yes!');
};
// named function 
// better debuging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no');
    //print()// recursion
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const added = (a, b) => a + b; // 아래의 함수를 간편하게 만들 수 있다. 
const addab = function(a, b) {
    return a + b;
};
console.log(`${added(1, 4)}`);
addab(1, 5); // ! console.log 하지 않으면 출력 되지 않는구나.. 왜지? ↓
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculator(operator, a, b) {
    if (operator == 'add') {
        return a + b;
    } else if (operator == 'subtract') {
        return a - b;
    } else if (operator == 'divide') {
        return a / b;
    } else if (operator =='multiply') {
        return a * b;
    } else if (operator == 'remainder') {
        return a % b;
    } else {
        console.log(`unknown command`)
    }
}
console.log(calculator('add', 2, 5)); 

// ellie made it with switch. i think that is more simple for read/ 