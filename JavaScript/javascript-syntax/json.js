//  JSON
// JavaScript Object Notation

// 1. Object to JSON // serialize
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(), 
    jump: () => {
        console.log(`${name} can jump!`); 
    },
};


json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'color' ? 'black' : value ; 
});

console.log(json);
console.clear();
// 2. JSON to Object // deserialize
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj.birthDate.getDate()); // 출력이 됨. 
console.log(obj);
rabbit.jump() // obj.jump() X

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); // getDate 사용할 수 없다. 







