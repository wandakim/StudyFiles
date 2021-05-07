let i = undefined;
let k = undefined;
i = setInterval(()=> {
    console.log('hello');
},1000); // 1초마다 'hello'를 출력한다. 

k = setInterval(()=> {
    console.log('hoizza');
},1000); // 1초마다 'hoizza'를 출력한다. 

setTimeout(()=> {
    clearInterval(i);
},5500);// 5.5초가 지나면 1초마다 'hello'가 출력되는 것을 멈춘다.

setTimeout(()=> {
    clearInterval(k); 
},7500);// 7.5초가 지나면 'hoizza'가 출력되는 것을 멈춘다. 

// setInterval() 은 고유의 id를 출력하고 그 id를 clearInterval()에 전달해주어 멈출 수 있다. 
// i와 k를 undefined로 할당해준 이유임 