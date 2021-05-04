'use strict'

// JavaScript is synchronous
// Execute the code block in order after hoisting. 
// hoisting: var, function declaration 
console.log('1');
setTimeout(() => console.log('2'), 1000); //callback 
console.log('3');

// Synchronous callback 
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); 

// Callback Hell example 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(id, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        },)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password,
    id => {
        userStorage.getRoles(
            id,
            userWithRole => { //parmetor 로 전달받은 object.
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)

// problems of callback hell 
// 비즈니스 로직을 한눈에 파악하기 어려움
// chain이 길어질수록 디버깅이 어려움
// => promise, async, await을 활용해 asynchronous function 을 깔끔하게 작성할 수 있음.
