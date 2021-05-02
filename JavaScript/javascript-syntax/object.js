'use strict';
// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};

// 1. Literals and properties
/* const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
} */

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax (class)

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob); // 동적 특징. 중간에 object의 필드를 추가하거나 삭제가 가능. JS만의 특징임. Debugging 어려우니 쓰지 않기.


// 2. Computed properties
// key should be always string
console.log(ellie.name); 
console.log(ellie['name']); // object key를 받아오는 또다른 방법.  runtime에서 결정될때 쓴다. * 코딩 할때는 .을 쓰라고 함.  
ellie['hasjob'] = true;
console.log(ellie.hasjob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');  //*

// 3. Property value shorthand (with Constructor)
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4)

// 4. Constructor function
function Person(name, age) {  
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in poerator: property existence check (key in obj)
console.log('name' in ellie); 
console.log('a' in ellie);
console.log('random' in ellie);

// 6. for..in vs for..of
//for (key in obj)
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable) *
const array = [1, 2, 4, 5];
for(let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dust, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
console.log(user); // name changed

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

// 객체에 대해 더 이해하고 싶으면 자바 서적을 참고할것. TypeScript를 배우려면 객체에 대한 이해가 꼭 필요할 것이다. 

const sbk = {age: 34, name: 'njdjk'};

console.log(sbk.name);

sbk = "dkdk"
console.log(sbk)




