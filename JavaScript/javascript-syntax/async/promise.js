'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected

// Producer vs Consumer

// 1. Producer // 사용자가 원할때만 네트워크 통신을 해야 할 때는 주의해야 한다. 바로 executor 실행되니까. 
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');  
        //reject(new Error('no network'));
    }, 2000);
}); 
// 2. Consumers: then, catch, finally
promise  // ... 으로 이어서 쓰는것. chaining. 
    .then(value => {   
    console.log(value);
    })
    .catch(error => {   // Promise가 다시 리턴됨. 
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber 
    .then(num => num * 2)
    .then(num => num * 3)  
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

//4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000); 
});
const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
    .then(getEgg)
    .catch(console.log)
    .then(cook)
    .then(console.log)