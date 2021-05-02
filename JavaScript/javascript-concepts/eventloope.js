function yo() {
    setTimeout(() => {
        console.log(`1.5s Timer done!`)
    }, 1500);

    for (let i = 0; i<3; i++){
    doSomething();
    console.log(i)
}

}
function doSomething() { // do something for 3sec
    console.log(`it takes 3sec`);
};

yo();

console.log('main 끝!');

/**
 * 콜스택에 실행중인 일을 멈추고 다른 일을 할 수 없다. 
 * 콜스택에서 다른 함수를 처리하고 있을 때 API에서 타임아웃 된 함수를 큐에 넣어주면 처리중인 것이 끝날 때까지 큐에서 대기한다. 
 */