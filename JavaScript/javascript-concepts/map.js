

// Map 이해하기
{
/**참고
 * https://www.youtube.com/watch?v=6DLLaHJi6Ks key 값을 저장하기 위해 Object가 아닌 new Map()을 사용하자. 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

// Map 객체는 키-값 쌍을 저장하며 각 쌍의 삽입 순서도 기억하는 콜렉션입니다. 아무 값(객체와 원시 값)이라도 키와 값으로 사용할 수 있습니다.

// object와 map은 비슷한 듯 다르다. 어떻게? 

//object 

let user = {};
user.name = "Sungbin";
user.email = "asdf1234@gmail.com";
user.phone = "12341234";
console.log(user.phone); // 12341234

// map

let userMap = new Map();
userMap.set("name", "Sumgbin");
userMap.set("email", "asdf1234@gmail.com");
userMap.set("phone", "12341234");
console.log(userMap.get("phone")); //12341234


// 값에 접근하기

// object 

// user.1 = "1234"; // number 사용해서 접근할 수가 없다. 
user[1] = "1234";
const key = 'ID';
user[key] = "abc"; //값에 접근하는 방식이 두가지

// map
userMap.set(1, "1234"); 
userMap.set(key, "1234"); 

// 우리가 모르는 값이나 숫자를 일관성있게 선언하는 것이 가능
// object의 key 에는 string 이나 symbol이 올 수 있으나 map의 key에는 object, function, number 등 모든 것이  올 수 있다. 
// object를 이용해 item을 넣고 빼는 것보다 map을 이용하는게 훨씬 빠르다.(성능적으로 우수하다고 함).
// 여러가지 내장 함수를 가지고 있기 때문에 값을 넣거나 빼기가 편하다. 
}

// object 대신 map을 사용해야 하는 이유? 

// 스터디 멤버들의 이름과 지역이 배열에 있다. 새로운 object와 map을 만들어 지역별로 key를 만들어 넣어보자.
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
// ---------------------------------------------------------
{

/**Tip13,  */

//.97 Object에 데이터를 추가,삭제,초기화(전부 삭제)하기 위해 3가지 메서드를 만듬. 

    let keyValue = {} 

    function addFilters(keyValObj, key, value) {
        keyValObj[key] = value; // key, value를 설정
        }
        
    function deleteFilters(keyValObj, key) {
        delete keyValObj[key]; // delete연산자를 사용해서 key,value 쌍을 삭제 
        }
        
    function clearFilters(keyValObj) {
        keyValObj = {};
        return keyValObj; // 모든 값을 제거하기 위해 변수를 재할당. filters = new Object();와 같다. 
        }
    

    {
        const keyValMap = new Map();
        function addFilters(map, key, value) {
        map.set(key, value);
        }
        
        function deleteFilters(map, key) {
        map.delete(key);
        }
        
        function clearFilters(map) {
        map.clear();
        }
    }


    // * 맵을 생성하고 데이터를 추가하고 가져오기 (.99)

    let newMap = new Map(); 

    newMap.set('key', 'value'); // add data
    newMap.get('key'); // return data
    console.log(newMap.get('key')) // value

    // ! 위의 object에 데이터를 넣고 빼는 것에 비해 간편하다.

    //* 데이터를 여러개 추가하기 (chaining)

    let mapKeyVals = new Map();
        .set('key1','val1' )
        .set('key2','val2')
        .set('key3','val3');

    mapKeyVals.get('key2'); //returns "val2"


    // * 데이터를 배열로 변환해 사용하기
    let myMap = new Map(
        [
            ['key1', 'val1'], 
            ['key2', 'val2'], 
            ['key3', 'val3'],
        ]
    )

    myMap.get('key1') // returns "value1"

    // * 데이터 삭제하기
    myMap.delete('val1');
    myMap.get('val1'); // returns undefined

    //* 모든 데이터 제거하기 
    mymap.clear();
    mymap.get('val2'); // returns undefined
}

// - object 에 key,value를 추가,삭제,초기화(모두삭제)를 위해 서로 다른 세가지 다른 방법을 사용.
// - 키-값 쌍을 자주 추가하고 삭제하는 경우에 객체보다 맵을 사용하면 편리하고 모든 동작과 의도가 매우 명료하게 보인다. 
// - Map을 사용하면 더 생산성 높게 코드 작성이 가능하다.


//-맵은 여러가지 자료형을 key로 받아올 수 있다. -> 값에 접근하기. 
{
    let mapKeyVals = new Map();
    .set('key1','val1' )
    .set('key2','val2')
    .set('key3','val3');

    console.log(mapKeyVals.keys();) 
    //MapIterator {"key1", "key2", "key3"}
// >[[Entries]]
// >__proto__: Map Iterator
// [[IteratorHasMore]]: true
// [[IteratorIndex]]: 0
// [[IteratorKind]]: "keys"
    // MapIterator {"key1", "key2", "key3"}
    // MapIterator 이용해서 데이터를 순회할 수 있다. *
}

// 객체는 순회하기가 번거롭다. for in, for of 등을 사용해야함
{ 
    const filters = { 
        color: 'black',
        breed: 'labrador',
    };
    function getAppliedFilters(filters) {
        const keys = Object.keys(filters); // key를 배열에 담는다. 
        const applied = [];
        for (const key of keys) {
            applied.push(`${key}:${filters[key]}`);
        }
        return `${applied.join(', ')}.`;
    }
      // 'color:black, breed:labrador.'
} 
//간단한 순회를 위해 해야할 것이 너무 많음. 
//Map에는 MapIterator의 일부로 정렬과 순회에 필요한 기능이 내장되어 있다. 
//Map을 이용해 훨씬 단순하면서도 원래의 데이터 구도를 유지하는 코드 작성이 가능하다. 
{ 
    const filters = new Map()
    .set('color', 'black')
    .set('breed', 'labrador');

    function getAppliedFilters(filters) {
        const applied = [];
        for (const [key, value] of filters) {
            applied.push(`${key}:${value}`);
        }
        return `${applied.join(', ')}.`;
        }
}

{ //필터링 조건을 정렬하기. 
    function getSortedAppliedFilters(filters) {
        const keys = Object.keys(filters);
        keys.sort(); // keys 배열을 먼저 정렬 해준다. 
        const applied = [];
        for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
        }
        return `${applied.join(', ')}.`;
    }
    // 'breed:labrador, color:black.'
}

// {// 
//     const filters = new Map()
//     .set('color', 'black')
//     .set('breed', 'labrador');
    
//     function checkFilters(filters) {
//     for (const entry of filters) {
//         console.log(entry);
//     }
//     }
//   // ['color', 'black']
//   // ['breed', 'labrador']

//     filters.entries();
//     //MapIterator(['color','black'],['breed','labrador'])

// }// MapIterator는 키-값 쌍을 넘겨준다. * MapIterator에 관해서는 곧 나올 예정..



// 맵은 순서를 저장하지만 배열의 경우처럼 sort()를 사용할 수 없다. 
// filters.sort() 이렇게 사용할 수가 없음. -> 펼침 연산자를 사용할 수 있다. 
[...filters];
// [['color', 'black'], ['breed', 'labrador']] // 키-값 쌍으로 이루어진 배열을 반환. 
{
    const filters = new Map()
    .set('color', 'black')
    .set('breed', 'labrador');

    function sortByKey(a, b) {
        return a[0] > b[0] ? 1 : -1;
    }
    function getSortedAppliedFilters(filters) {
        const applied = [...filters]
            .sort(sortByKey)
            .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');
        return `Your filters are: ${applied}.`;
    }
      // 'Your filters are: breed:labrador, color:black.'
}
// ------------------------------------------
//Tip15 맵 생성 시 부수 효과를 피하라. 
//- 맵의 사본은 어떻게 생성할까? 
{
    const defaults = new Map()
    .set('color', 'brown')
    .set('breed', 'beagle')
    .set('state', 'kansas')
    
    const copy = new Map([...defaults]);
}
//- 맵은 하나의 키를 한번만 사용할 수 있다. 
//- 이미 생성된 키로 맵을 생성하면 마지막으로 선언됭 값을 사용.
{   
    const filters = new Map()
    .set('color', 'brown')
    .set('color', 'black');
    filters.get('color'); // black
// 값을 갱신한다.
// 펼침 연산자를 사용하면 코드 한줄로 병합이 가능하다. 
    function 병합(map1,map2) {
        return new Map ([...map1,map2])
    }// 이렇게 병합할 수가 있음. 

}

// --------------------------------------------
// Tip 16 세트를 이용해 고윳값을 관리하라. 
{
    const colors = ['black','black','brown'];
    const unique = new Set(colors); //set {'black','brown'}
    //펼침 연산자를 사용하면 배열로 반환할 수 있다. 
    function getUnique(attributes) {
        return[...new Set(attributes)];
    }
    console.log(getUnique(colors)); // [ 'black', 'brown' ]
}
