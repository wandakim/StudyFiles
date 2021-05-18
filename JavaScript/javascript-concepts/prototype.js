// 자바스크립트에 클래스는 없지만 함수(function)와 new를 통해 클래스를 비스무리하게 흉내낼 수 있다.
function Person() {
  this.eyes = 2;
  this.nose = 1;
}
var kim  = new Person();
var park = new Person();
console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1
console.log(park.eyes); // => 2
console.log(park.nose); // => 1

// Prototype Link, Prototype Object
// 자바스크립트에는 Prototype Link 와 Prototype Object라는 것이 존재한다. 그리고 이 둘을 통틀어 Prototype이라고 부름. 

// Prototype Object
// 객체는 언제나 함수(Function)로 생성됩니다.
function Person() {} // => 함수
var personObject = new Person(); // => 함수로 객체를 생성

// 일반적인 객체 생성도 예외는 아니다.
var obj = {};
// 얼핏보면 함수랑 전혀 상관없는 코드로 보이지만 위 코드는 사실 다음 코드와 같다.
var obj = new Object();
//위 코드에서 Object가 자바스크립트에서 기본적으로 제공하는 함수이다. 


// https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67