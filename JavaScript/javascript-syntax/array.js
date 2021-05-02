'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍏', '🍌'];
console.log(fruits);   
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]); // last value

// 3. Looping over an array 
// print all fruits 
let i = 0;  // my try
while (i < fruits.length){
    console.log(fruits[i]);
    i++;
}

// a. for
for(let i = 0; i< fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of *
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach *
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));  
// anonymous function can use arrow function

// 4. Addition, selection, copy
// push : add an item to the end

fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beggining
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push. use pop, push as it can
// dplice: remone an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'strawberry', 'lemon' ); // splice and push // (1,0,'a'.'b') it can used when we puth value 
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('lemon'));

// includes
console.log(fruits.includes('watermelon')); // false

// lastIndexOf
console.log(fruits); // (6) [lemon, strawberry, ... , lemon]
console.log(fruits.indexOf('lemon')); // 0
console.log(fruits.lastIndexOf('lemon')); // 5
console.log(fruits.toString());
// *Homework 
// read Array APIs and try it each ones


//연습 for forof forEach

for(i = 0; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

for(let value of fruits) {
    console.log(value);
}

fruits.forEach((value, index) => console.log(value, index));


