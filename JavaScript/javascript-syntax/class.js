// class fiedls + methods / template
// object / data in 
// 


'use strict';
// Object-oriented programming
// class: template
// object: instatance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        console.log(this) // this는 Person
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(this) // person 
        console.log(`${this.name}: hello!`);
    }
}
const wanda = new Person('wanda', 26);
console.log(wanda.age);
console.log(wanda.name);
wanda.speak();

console.clear();
// 2. Getter and setters // 사용자의 실수를 막고 방어적으로 코드를 작성. if user put negative number at age? *
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        console.log(this) // User
    }
    
    get age() {         //Getter를 설정하는 순간 constructor안에 있는 this.age는 get() 호출, age는 setter 호출한다. 
        console.log(this._age); // this.age로 하면 callstack 꽉 차버림. 
        return this._age; // get을 이용해 값을 return 
        
    }

    set age(value) {    //값을 설정하기 때문에  value를 받아온다. 
        this._age = value < 0 ? 0 : value;  // set을 이용해 값을 설정한다. 
    }}    
const user1 = new User('Steve', 'Jib', -1); // 나이가 -1이 될 수 없다. 
console.log(user1.age);
console.log(user1._age);
//


// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

// 4.Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding'; //class 자체의 것. object에 상관없이 공통적으로 사용하는 것이라면.. static이 좋음.
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
//console.log(article1.publisher) :undifined
Article.printPublisher();

//상속, 다양성 ** Important
// 5. Inheritance
// a way for one class to extend another class. 
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw() // * 나중에  다시 
        console.log('🔺')
    }
    getArea() {
        return (this.width * this.height) / 2;  // over writing! 필요한 함수들만 쓸 수가 있다. 
    }
    toString() { 
        return `Triangle: color: ${this.color}`;   // more meaningful
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); 
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Object); //true * Every Objects of JavaScript extends Object.
console.log(triangle.toString());  // we can use commonly existing methods in Object class. 

// Javascript mdn references  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#built-ins
// categorys. 
