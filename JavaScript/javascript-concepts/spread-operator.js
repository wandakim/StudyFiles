
// async/await

/**
* Tip8 push() 메서드 대신 펼침 연산자로 원본 변경을 피하라. 
* 자바스크립트 상당수가 함수형 프로그래밍의 형식이므로 부수효과와 조작이 없는 코드를 작성할 필요가 있음. 
* 조작이 항상 골치아픈 일을 만들어 내는 것은 아니지만 잠재적으로 문제가 되는 것은 사실이므로 가급적 조작을 피하는 것이 좋다. 
 *  => 펼침 연산자를 사용해 배열에 대한 의도치 않은 잠재적 조작 위험을 피하는 방법을 안다. 
 */

// 
{
const cart = [
    {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
    },
    {
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
    },
    {
    name: 'Red Mars',
    price: 5.99,
    discount: true,
    },
]; // 책 3권 안할인상품 2개 + 할인상품 1개 

const reward = { // 사은품으로 주는 SF 가이드북
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0,
};

// 카트에 상품이 3개 이상 담겨있으면 cart에 사은품 추가하고 cart 반환 
function addFreeGift(cart) {
    if (cart.length > 2) {
    cart.push(reward);
    return cart;
    }
    return cart;
}
// 할인상품 갯수 파악 및 사은품 추가 처리 후 카트 안의 정보를 리턴하는 함수. 
function summarizeCart(cart) {
    const discountable = cart.filter(item => item.discount);  
    if (discountable.length > 1) { // 카트의 할인상품 갯수를 파악해서 2개 이상이면 에러 호출. 현재 할인1 안할인2 이므로 통과. 
    return {
        error: 'Can only have one discount',
    };
    }
    const cartWithReward = addFreeGift(cart);  // 사은품을 넣어줌. => 원본 cart에 사은품이 추가됨. (조작됨)
    console.log(cart.length); // cart: 4 => 안할인2 할인2(사은품1+할인1)
    return {
    discounts: discountable.length, // 2 카트의 할인상품 갯수
    items: cartWithReward.length, //   4 상품갯수 
    cart: cartWithReward, // cart (배열) 
    };
}

console.log(summarizeCart(cart));
console.log(cart.length);// 4 
} //(1)할인상품은 1개 까지만 구매할 수 있다. 2개 이상이면 error호출. (2) 3개 이상의 상품을 구매하면 사은품을 준다. 





// -> 어느날 착한 개발자가 코드 정리를 위해 변수(cartWithReward, discountable)의 위치를 바꿨더니 의도치 않은 조작이 발생한다. 
{
const cart = [
    {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
    },
    {
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
    },
    {
    name: 'Red Mars',
    price: 5.99,
    discount: true,
    },
];

const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0,
};

// 카트에 상품이 3개 이상 담겨있으면 cart에 사은품 추가하고 cart 반환하는 함수. 
function addFreeGift(cart) {
    if (cart.length > 2) {
    cart.push(reward);
    return cart;
    }
    return cart;
}

function summarizeCartUpdated(cart) { //1/3
    console.log(cart.length); // 3 -> 할인상품 1개 
    const cartWithReward = addFreeGift(cart); //  *변수에 할당하는 과정에서 의도치 않게 카트에 사은품이 추가됨.  
    console.log(cart.length); // 4 -> 할인상품 2개
    const discountable = cart.filter(item => item.discount); // 카트 안의 할인상품 갯수. 이미 카트에 할인상품이 2개이므로 오류가 나버린다.   
    if (discountable.length > 1) {
    return {
        error: 'Can only have one discount',
    };
    }
    //원래 cartWithReward의 위치. 
    return {
    discounts: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
    };
}

console.log(summarizeCartUpdated(cart)); //{error: "Can only have one discount"}
}

/**
 * 분리된 함수에서 의도치 않게 원본을 조작하지 않으려면 부수효과가 없는 '순수함수' 를 만들기 위해 노력해야 한다.
 */

{ // 원본을 조작하지 않고 복사해 와서 concatenate
    function addGift(cart) {
        if (cart.length > 2) {
          return [...cart, reward];
        }
        return cart;
      }
      
      function summarizeCartSpread(cart) {
        const cartWithReward = addGift(cart); // 변수 할당시 원본 조작 X
        const discountable = cart.filter(item => item.discount);
        if (discountable.length > 1) {
          return {
            error: 'Can only have one discount',
          };
        }
        return {
          discounts: discountable.length,
          items: cartWithReward.length,
          cart: cartWithReward,
        };
}
}
/**
 * + 배열에 아이템을 추가하기
 */

{
  // Add to beginning.
  const titles = ['Moby Dick', 'White Teeth'];// 배열에 아이템을 추가하고 싶음. 
  titles.shift('The Conscious Mind'); // unshift 해야하는데 기억 안나서 이렇게 실수함. 

  const moreTitles = ['Moby Dick', 'White Teeth'];
  const evenMoreTitles = ['The Conscious Mind', ...moreTitles]; // 함수가 기억나지 않을 수 있으니 펼침 연산자로 하자. 

  // Copy
  const toCopy = ['Moby Dick', 'White Teeth'];
  const copied = toCopy.slice(); // copied = ["Moby Dick", "White Teeth"] but slice 로 배열을 카피할 수 있다는 사실을 잊어버릴 수 있다. 

  const moreCopies = ['Moby Dick', 'White Teeth'];
  const moreCopied = [...moreCopies]; // 펼침 연산자를 사용하자. 
}

{ // 배열에 아이템을 앞, 뒤에 각각 추가하고 제거하는 메소드
  [
          // <- unshift()
      a,  // -> shift()
      b,
      c,
      d,
      e,   // -> pop() 
          // <- push()
  ]
  }

//결론: 펼침 연산자를 이용하면 쉽게 아이템을 넣을 수 있고 복사 할 수도 있다.

//* slice()
  // slice(부터, 이전까지) 
  //The original array will not be modified.
{ 

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2)); // index = 2부터 
// expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice());
// ['ant', 'bison', 'camel', 'duck', 'elephant']

}




//----------------------------

/**
 * Tip9 펼침 연산자로 정렬에 의한 혼란을 피하라.
 * 펼침 연산자로 배열을 여러 번 정렬해도 항상 같은 값을 나오게 하기.
 */

{
    const staff = [
        {
          name: 'Joe',
          years: 10,
        },
        {
          name: 'Theo',
          years: 5,
        },
        {
          name: 'Dyan',
          years: 10,
        },
      ];
      
      function sortByYears(a, b) { // 근속년수를 기준으로 오름차순 정렬하는 함수 
        if (a.years === b.years) {
          return 0; // 정렬하지 않음. 
        }
        return a.years - b.years; // 음수 리턴될 경우 가 a가 먼저온다. 오름차순. 정렬. 
      }
      
      const sortByName = (a, b) => { // name을 기준으로 오름차순 정렬하는 함수. 
        if (a.name === b.name) {
          return 0;
        }
        return a.name > b.name ? 1 : -1;  //console.log('a'>'b'); 
      };


      staff.sort(sortByYears); //T J D
// [
//   {
//     name: 'Theo',     
//     years: 5
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
//   {
//     name: 'Dyan',
//     years: 10
//   },
// ];
//  # END:sortYears

//  # START:sortName
staff.sort(sortByName); 

// [
//   {
//     name: 'Dyan',
//     years: 10
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
//   {
//     name: 'Theo',
//     years: 5
//   },
// ];
//  # END:sortName

//  # START:sortYearsAgain
staff.sort(sortByYears); // T D J

// [
//   {
//     name: 'Theo',
//     years: 5
//   },
//   {
//     name: 'Dyan',
//     years: 10
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
// ]
}  
// staff.sort()함수를 호출해 정렬할 때 순서가 바뀌었다. 사용자가 항상 같은 결과를 볼 수 없음. 

{
    [...staff].sort(sortByYears);

// [
//   {
//     name: 'Theo',
//     years: 5
//   },
//   {
//     name: 'Joe',
//     years: 10
//   },
//   {
//     name: 'Dyan',
//     years: 10
//   },
// ];

} // 원본을 조작하지 않고, 원본 복사 후 정렬한 결과를 보여주기 때문에 사용자가 항상 같은 결과를 볼 수 있다. 



/** sort(comparefunction()) 참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * arr.sort([compareFunction])
 * compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됨.
 * compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
 * compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
 * compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
 * compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.
 */
{
  



}
