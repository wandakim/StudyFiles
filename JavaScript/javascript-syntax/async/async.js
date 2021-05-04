// async & await
// clear style of useing promise :) 각각 사용하기 좋은 상황이 있음. 
// class 와 같이 syntactic sugar.

// 1. async
// function fetchUser() {  
//     return new Promise((resolve, reject) => {  // resolve|reject 없으면 pending이 되어버린다. 
//         //do network request in 10secs... 
//         return 'ellie';
//     })
// } // Promise로 비동기 처리를 한 경우. 

async function fetchUser() { //번거롭게 promise로 작성하지 않아도 함수를 비동기처리 할 수 있다.
    //do network request in 10secs... 
    return 'ellie';
}

const user = fetchUser();
user.then(console.log); //비동기 처리
console.log(user);

// 2. await //기다려 준다. async 안에서만 쓸 수 있다. 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); // wawit은 async 붙은 함수 안에서만 쓸 수 있다. 
    throw 'error'; // 
    return '🍎';
}
async function getBanana() {
    await delay(1000);
    return '🍌';
}


//모든 과일을 받아오는 예시. Promise chaing 많이하면 callback hell이나 다름없다. 
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     })
// }

async function pickFruits() {
    try { //try catch로 error handling.
    // const applePromise = getApple();
    // const bananaPromise = getBanana(); // 병렬적으로 Promise(async)를 만들면 바로 함수가 실행됨을 이용해서 병렬적으로 1초만에 출력시킬 수 있다. async와 await은 새로운 것이 아니라 기존의 Promise를 이용해서 더 간편하게 만든것임.
    const apple = await applePromise;
    const banana = await bananaPromise; 
    return `${apple} + ${banana}`;
    } catch() {
    }
} // 지저분함. API를 이용

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // 배열에 전달된 모든 Promise가 받아질 때 까지 대기시켜줌
    .then(fruits => 
        fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);  // 배열에 전달된 Promise중 가장 먼저 값을 return하는 것만 수행되도록 할 수 있다. 
}

pickOnlyOne().then(console.log);