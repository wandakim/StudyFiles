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

ellie.hasJob = true; // JavaScript는 런타임에서 타입이 결정되는 언어이므로 뒤늦게 추가가 가능. 유지보수가 힘들어진다. 
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob); // 동적 특징. 중간에 object의 필드를 추가하거나 삭제가 가능. JS만의 특징임. Debugging 어려우니 쓰지 않기.


// 2. Computed properties
// key should be always string
console.log(ellie.name); 
console.log(ellie['name']); // object key를 받아오는 또다른 방법.  들어오는 값이 runtime에서 결정될때 쓴다. * 코딩 할때는 .을 쓰라고 함.  
ellie['hasjob'] = true; // 만약 Number가 들어오거나 할 때는 값에 접근이 안되기 때문에 사용한다. 
console.log(ellie.hasjob);

function printValue(obj, key) {
    console.log(obj[key]); // 동적으로 값을 받아올 때 사용. obj.key 라고 하면 정말 key라는 property가 있는지를 확인 해 버린다. 
}
printValue(ellie, 'name');
printValue(ellie, 'age');  //*

{
function getTotalStats() {
    
      const game1 = {
        player: 'Jim Jonas',
        hits: 2,
        runs: 1,
        errors: 0,
      };
    
      const game2 = {
        player: 'Jim Jonas',
        hits: 3,
        runs: 0,
        errors: 1,
      };
    
      const total = {};
    
      const stats = Object.keys(game1);
      for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        if (stat !== 'player') {
          total[stat] = game1[stat] + game2[stat]; // 요렇게 더해줄 수가 있다. 
        }
      }
    
    }
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
console.log('name' in ellie); //true
console.log('age' in ellie); // true
console.log('random' in ellie); // false

// 6. for..in vs for..of
//for (key in obj)
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable) //  배열과 같이 iterable 한 것에 씀. 
const array = [1, 2, 4, 5];
for(let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dust, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); // name: coder -> name changed
//user와 user2는 같은 ref 를 가리키고 있고 그 ref는 name, age와 그 값을 가지고 있는 메모리를 가리킨다. 

// old way ,진짜 복사를 해 보자. 
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
const mixed = Object.assign({}, fruit1, fruit2); // 
console.log(mixed.color);  // blue, big. 뒤에 assign 하는 것이 덮어 씌운다. 
console.log(mixed.size);

// 객체에 대해 더 이해하고 싶으면 자바 서적을 참고할것. TypeScript를 배우려면 객체에 대한 이해가 꼭 필요할 것이다. 

const sbk = {age: 34, name: 'njdjk'};

console.log(sbk.name);

sbk = "dkdk"
console.log(sbk)




//?
function getTotalStats() {
    // # START:loop
    
      const game1 = {
        player: 'Jim Jonas',
        hits: 2,
        runs: 1,
        errors: 0,
      };
    
      const game2 = {
        player: 'Jim Jonas',
        hits: 3,
        runs: 0,
        errors: 1,
      };
    
      const total = {};
    
      const stats = Object.keys(game1); //*
      for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        if (stat !== 'player') {
          total[stat] = game1[stat] + game2[stat];
          //좌항에서는 destructuring 오른쪽에서는 key 로 기존 object의 value에 접근 
          //total.stat = game1.stat + game2.stat; 왜 이건 안될까? 
        }
      }
      console.log(total);
    }

    getTotalStats();