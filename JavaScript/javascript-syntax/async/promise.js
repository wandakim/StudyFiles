'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer 

// 1. Producer // Promise 생성시 바로 executor가 실행되므로 원하지 않는 네트워크 통신이 일어나는 것에 주의해야 한다. 
//      *when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
    console.log(`doing some heavy work (network, read files)`);// -> Promise 생성시 바로 실행됨
    setTimeout(() => {
        resolve('ellie');  
        //reject(new Error('no network')); -> Error handling part
    }, 2000);
}); 
// 2. Consumers: then, catch, finally
promise  // ... 으로 이어서 쓰는것. chaining. 
    .then(value => {   // value = 'ellie'
    console.log(value); // 3초 후 ellie 출력
    })
    .catch(error => {   // Consumer 입장에서 error handling. them에서 Promise가 다시 리턴되기 때문에 가능(chaingng)
        console.log(error);
    })
    .finally(() => { // recsently added.  
        console.log('finally'); // 성공, 실패와 관계없이 실행된다. 
    });
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber 
    .then(num => num * 2)
    .then(num => num * 3)  
    .then(num => {
        return new Promise((resolve, reject) => { //then은 promise를 전달할 수도 있다. 
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
    .then(getEgg) //.then(hen => getEgg(hen)) 콜백함수 호출시 받아온 값을 바로 전달하는 경우 더 간단하게 작성할 수 있다. 
    .catch(error => {
        return '🍎'; 
    })
    .then(cook)
    .then(console.log)
    .catch(console.log) // getEgg 에서 에러가 발생했으나 마지막줄에서 catch가 가능.
    // 🍎 => 🍳 에러가 중간에 발생하더라도 출력가능.