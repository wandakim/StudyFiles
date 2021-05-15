
/**
 * Shorthand property names
 */
{

const ellie1 = {
    name: 'Ellie', 
    age: '18',
};

const name = 'Ellie'; 
const age = '18';

//old
const ellie2 = {
    name: name, 
    age: age,
};

//new
const ellie3 = {
    name,
    age,
// const 로 지정해 둔 값을 그대로 object의 사용하는 경우 이렇게 작성이 가능하다. 
}
}

{
/**
 * Destructuring Assignment
 */


// object
const student = {

    name: 'Anna',
    level: 1,
}

//old
{
    const name = student.name;
    const level = student.level;
    console.log(name, level);
}

//new
{
    const { name, level }  = student;
    console.log(name, level);

    const { name: studentName, level: studentlevel } = student;
    console.log(studentName, studentlevel);
}

// array
const animals = ['dog', 'cat'];

//old
{
    const a = animals[0];
    const b = animals[1];
    console.log(a, b);
}

//new
{
    const [a,b] = animals;
    console.log(a,b);
}
}

/**
 * spread syntax
 */
{
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy)

    const arrayCopy2 = [...array, { key: 'key3'}];
    console.log(arrayCopy2);
    obj1.key = 'newkey'; // object를 완전히 복사해오는 것이 아니라는 것에 유의. object 안에 있는 key, value는 참조된 것일 뿐이다.  => obj 1,2,3다 바뀜. 

    obj3 = {...obj1};
    console.log(obj3); // {key: 'newkey'}

    // array concatanation 
    const ab = ['a','b'];
    const cd = ['c','d'];
    const abcd = [...ab, ...cd]; // Array Concat
    console.log(abcd);

    // object merge 
    const dog1 = { dog: 'small' };
    const dog2 = { dog: 'big' };
    const dog = { ...dog1, ...dog2};
    console.log(dog); // when merge objects that have same key, it ts covered with after thing
}


/**
 *  Default parameters
 */
{
    //old
    {
    function printMessage(message) {
        if (message == null){
            message = 'default message';
        }
        console.log(message);
    }
    printMessage(); // undefined.
    }   
    //new
    {
    function printMessage(message = 'default message') {
    console.log(message);
    }
    printMessage('hello');
    printMessage();
    }
}
    /**
     * Ternary Operator
     */
{
    const isCat = ture;
    //bad
    {
        let component;
        if (isCat) {
            component = 'cat';
        } else {
            component = 'dog';
        }
        console.log(component); 
    }
}    
    //good
{ 
    const component = isCat ? 'cat' : 'dog';
    console.log(component);
    console.log(isCat ? 'cat' : 'dog'); // React에서 많이 씀
} 
console.clear()

    /**
     * Template Literals
     */

