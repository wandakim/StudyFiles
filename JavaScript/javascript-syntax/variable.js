// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
// mordern coding
'use strict';


// 2. Variable, rw(read/write)
// let (added in ES6) - without IE , Aftertime use BABEL ES6 이전 버전은 잘 사용하지 않음. 
let globalName = 'global name'; // Global Scope. 최소한으로 쓰는 것이 좋음. 
{  // Block Scope. 밖에서는 볼 수 없음. 
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name); 
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move diclaration from bottom to top)
// has no block scope(lexical scope)
{
console.log(age); // undefined -> var hoisting으로 인해 선언,값 할당 전에도 출력됨
age = 4; // -> 변수 age를 선언하기 전에 할당
console.log(age);  // 4 -> 변수를 선언하기 전에 할당하고 출력도 됨 
var age;
console.log(age); // 4 -> 값을 먼저 할당하고 변수를 선언했음에도 출력이 됨
}
console.log(age); // 4 -> 변수가 선언되고 할당된 블럭 밖에서도 출력이 됨

//console.log(gong); // in case of let, Uncaught. before initialization, cannot use it. 
let gong
gong =5;
console.log(gong); // 5

// 3. Constant, r(read only) 
// use const whenever possible.



// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze()
// Mutable data types: all objects by default are mutable in JS 
// favor immutable type always for a few reasons: 
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber =5;

// 4. Variable types
// primitive, single item: Number, string, boolean, null, nundefined, symbol
// object, box container
// function, first-class function

// number
const count =17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); 
console.log(`value: ${size}, type: ${typeof size}`)

// number - speicial numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const chat = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //``template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;  
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); //* value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); //* value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id'); 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //.description -> string 으로 출력한다. 안그러면 error발생 

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; 
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // error --> TS appear

// 