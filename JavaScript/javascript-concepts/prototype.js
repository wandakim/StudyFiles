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
// kim과 part 두개의 객체를 생성했고, 생성한 각 객체는 eyes를 공통으로 가지고 있다.
// 만약 각 객체가 메모리를 차지한다면 객체의 갯수가 무수히 많을 경우 메모리 낭비가 심할 것이다. 그래서 JS는 prototype으로 이 문제를 해결했다. 
// Prototype Link, Prototype Object에 대해 알아보자. 
// 자바스크립트에는 Prototype Link 와 Prototype Object라는 것이 존재한다. 그리고 이 둘을 통틀어 Prototype이라고 부름. 

// Prototype Object
// 객체는 언제나 함수(Function)로 생성됩니다.
function Person() {} // => 함수
var personObject = new Person(); // => Person함수로 객체를 생성

// 일반적인 객체 생성도 예외는 아니다.
var obj = {};
// 얼핏보면 함수랑 전혀 상관없는 코드로 보이지만 위 코드는 사실 다음 코드와 같다.
var obj = new Object();
//위 코드에서 Object가 자바스크립트에서 기본적으로 제공하는 함수이다. 
//즉, 모든 오브젝트는 기본제공 객체를 상속한다. 

// 함수가 생성될 때 모든 함수는 Object()의 Prototype Object를 상속하여 만들어진다. 
// 즉 만들어지는 fn.__proto__ 는 Object Prototype Object를 가리키고 있다. 
// 함수를 정의하면 함수만 생성되는 것이 아니라 그 함수의 Prototype Object가 같이 생성된다. 
// 함수의 prototype 속성은 Prototype Object를 가리키고 접근하게 해준다. 
// 생성된 Prototype Object는 constructor 와 __proto__ 두개의 속성을 가진다. 
//  constructor 는 생성한 함수를 가리킨다. 그래서 new 라는 키워드로 객체를 만들 수 있는 것이다. 
// __proto__는 상위 Prototype Object를 가리키고 접근하게 해준다. 
// 이런 프로토타입 체인 구조 때문에 모든 객체는 Object의 자식이라고 불리고, Object Prototype Object에 있는 모든 속성을 사용할 수 있다. 
// ex) toString() 은 Object {} 의 속성이기 때문에 모든 객체에서 사용 가능한 것이다. 


// *prototype chain 의 구조 구도 보기 
// https://miro.medium.com/max/5280/1*mwPfPuTeiQiGoPmcAXB-Kg.png


//참고
// https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67

