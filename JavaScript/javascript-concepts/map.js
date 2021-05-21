

// Map 이해하기
{
/**참고
 * https://www.youtube.com/watch?v=6DLLaHJi6Ks key 값을 저장하기 위해 Object가 아닌 new Map()을 사용하자. 
 */
// map은 key와 value를 가지고 있다. 

//object 

let user = {};
user.name = "Sungbin";
user.email = "asdf1234@gmail.com";
user.phone = "12341234";
console.log(user.phone); // 12341234

// user.1 = "1234"; // number 사용해서 접근할 수가 없다. 
user[1] = "1234";
const key = ID;
user[key] = "abc"; //값에 접근하는 방식이 두가지


// Map

let userMap = new Map();
console.log(userMap);
userMap.set("name", "Sumgbin");
userMap.set("email", "asdf1234@gmail.com");
userMap.set("phone", "12341234");
console.log(userMap.get("phone")); //12341234
// object와 map 은 key 와 value를 가지고 있다. 

userMap.set(1, "1234"); 
userMap.set(key, "1234"); 
// 우리가 모르는 값이나 숫자를 일관성있게 선언하는 것이 가능
// object의 key 에는 string 이나 symbol이 올 수 있으나 map의 key에는 object, function, number 등 모든 것이  올 수 있다. 
// object를 이용해 item을 넣고 빼는 것보다 map을 이용하는게 훨씬 빠르다.(성능적으로 우수하다고 함).
// 여러가지 내장 함수를 가지고 있기 때문에 값을 넣거나 빼기가 편하다. 
}






// object 대신 map을 사용해야 하는 이유? 
// 스터디 멤버들의 이름과 지역이 배열에 있다. 새로운 object와 map을 만들어 지역별로 key를 만들어 넣어주겠다. (아래 참고)
{
    let jsStudyArr = [
        {name:"A", city:"Incheon"},
        {name:"B", city:"Incheon"},
        {name:"C", city:"Seoul"},
        {name:"D", city:"Jeju"},
        {name:"E", city:"Seoul"},
        {name:"F", city:"Jeju"},
        {name:"G", city:"Seoul"},
        {name:"H", city:"Busan"},
        {name:"I", city:"Busan"},
    ];

    let cityOfMember = {};
    jsStudyArr.forEach(item => {
        if(!cityOfMember[item.city]){ 
            cityOfMember[item.city] = [];
        }
        cityOfMember[item.city].push(item);
    })
    console.log(cityOfMember);
    // {
    //     Incheon: [ { name: 'A', city: 'Incheon' }, { name: 'B', city: 'Incheon' } ],
    //     Seoul: [
    //       { name: 'C', city: 'Seoul' },
    //       { name: 'E', city: 'Seoul' },
    //       { name: 'G', city: 'Seoul' }
    //     ],
    //     Jeju: [ { name: 'D', city: 'Jeju' }, { name: 'F', city: 'Jeju' } ],
    //     Busan: [ { name: 'H', city: 'Busan' }, { name: 'I', city: 'Busan' } ]
    //   }


    let mapCityOfMember = new Map();
    jsStudyArr.forEach(item => {
        if(!mapCityOfMember.has(item.city)) {
            mapCityOfMember.set(item.city, []);
        }
        mapCityOfMember.get(item.city).push(item);
    })
    console.log(mapCityOfMember);
    // Map(4) {
    //     'Incheon' => [ { name: 'A', city: 'Incheon' }, { name: 'B', city: 'Incheon' } ],
    //     'Seoul' => [
    //       { name: 'C', city: 'Seoul' },
    //       { name: 'E', city: 'Seoul' },
    //       { name: 'G', city: 'Seoul' }
    //     ],
    //     'Jeju' => [ { name: 'D', city: 'Jeju' }, { name: 'F', city: 'Jeju' } ],
    //     'Busan' => [ { name: 'H', city: 'Busan' }, { name: 'I', city: 'Busan' } ]
    //   }
    
    // *결과는 동일하나 if문을 사용할 때 차이가 있다. 
    if(3) console.log(3); // 3
    if(1) console.log(1); // 1
    if(0) console.log(0); // 
    if(undefined) console.log('undefined!')// 
    if(!0) console.log(0); // 0 
    
    // 위의 예제에서 if()를 보자.  
    // 만약 예기치 못하게 if 안의 값이 0이 될 경우 프로그램이 원하지 않는 방법으로 동작할 수 있다. 
    console.log(cityOfMember['a'])// undefined. object에서 값을 찾을 때 true나 false를 리턴 해 주는것이 아니다. 
    console.log(mapCityOfMember.has('a')) // 맵에서 has() 함수를 사용하여 false. boolean값으로 명확하게 리턴 할 수 있다.
    
    // 컬렉션 안의 요소가 있는지 확인할 때 훨씬 명확하게 알 수가 있음.  
    

}