// async & await
// clear style of useing promise :) 각각 사용하기 좋은 상황이 있음. 

// 1. async
// function fetchUser() {  
//     return new Promise((resolve, reject) => {  // resolve|reject 없으면 pending이 되어버린다. 
//         //do network request in 10secs... 
//         return 'ellie';
//     })
// }
async function fetchUser() {
    //do network request in 10secs... 
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await //기다려 준다. async 안에서만 쓸 수 있다. 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}
async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function getBanna() {  // chaining의 예 . 
//     return delay(1000);
//     .then(() => '🍌')
// }  

//모든 과일을 받아오는 예시. 콜백 지옥과 같은 상황이 발생할 수 있다. 
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     })
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana(); // 병렬적으로 실행하기. 
    const apple = await applePromise;
    const banana = await bananaPromise; 
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => 
        fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); //먼저 완료되는 것만 나온다. 
}

pickOnlyOne().then(console.log);