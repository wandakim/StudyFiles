/**
* Tip8 push() 메서드 대신 펼침 연산자로 원본 변경을 피하라. 
* 자바스크립트 상당수가 함수형 프로그래밍의 형식이므로 부수효과와 조작이 없는 코드를 작성할 필요가 있음. 
* 조작이 항상 골치아픈 일을 만들어 내는 것은 아니지만 잠재적으로 문제가 되는 것은 사실이므로 가급적 조작을 피하는 것이 좋다. 
 *  => 펼침 연산자를 사용해 배열에 대한 의도치 않은 잠재적 조작 위험을 피하는 방법을 안다. 
 */

// -> 카트에 할인상품이 2개 미만으로 담겨 있다면 할인상품 하나를 추가해 준다.  원본 조작이 일어나지만 원하는 값을 얻음. 
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

const reward = { // 사은품으로 주는 공상과학 가이드북
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
// cart의 할인중인 상품 갯수를 파악해서 2개 이상이면 에러 호출하고, 아니면 카트에 사은품 추가하고나서 카트 안의 정보를 보여주는 함수. 
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
    discounts: discountable.length, // 카트의 할인상품 갯수
    items: cartWithReward.length, //   " 상품갯수 
    cart: cartWithReward, // 최종 카트(배열) 
    };
}

console.log(summarizeCart(cart));
console.log(cart.length);// 4 
}


// -> 코드 정리를 위해 변수(cartWithReward, discountable)의 위치를 바꿨더니 의도치 않은 조작이 발생한다. 
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
    const cartWithReward = addFreeGift(cart); //  => 변수에 할당하는 과정에서 의도치 않게 카트에 사은품이 추가됨.  
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

console.log(summarizeCartUpdated(cart));
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
 * 배열에 아이템을 자유자재로 넣고 빼기
 */

{
  // Add to beginning.
  const titles = ['Moby Dick', 'White Teeth'];
  titles.shift('The Conscious Mind'); // unshift 해야하는데 기억 안나서 이렇게 실수 할 수 있다는 얘기. 

  const moreTitles = ['Moby Dick', 'White Teeth'];
  const evenMoreTitles = ['The Conscious Mind', ...moreTitles]; // 함수가 기억나지 않을 수 있으니 펼침 연산자로 하자. 

  // Copy
  const toCopy = ['Moby Dick', 'White Teeth'];
  const copied = toCopy.slice(); // copied = ["Moby Dick", "White Teeth"] but slice 로 배열을 카피할 수 있다는 사실을 잊어버릴 수 있다. 

  const moreCopies = ['Moby Dick', 'White Teeth'];
  const moreCopied = [...moreCopies]; // 펼침 연산자를 사용하자. 
}

//결론: 펼침 연산자를 이용하면 쉽게 아이템을 넣을 수 있고 복사 할 수도 있다.




{ // 배열에 아이템을 앞, 뒤에 각각 추가하고 제거하는 메소드
[
        // <- unshift
    a,  // -> shift 
    b,
    c,
    d,
    e,   // -> pop 
        // <- push
]
}
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
      
      function sortByYears(a, b) { // 근속년수를 기준으로 정렬하는 함수
        if (a.years === b.years) {
          return 0;
        }
        return a.years - b.years;
      }
      
      const sortByName = (a, b) => { // name을 기준으로 정렬하는 함수. 
        if (a.name === b.name) {
          return 0;
        }
        return a.name > b.name ? 1 : -1;
      };
      
      export { staff, sortByYears, sortByName };

      staff.sort(sortByYears);
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
staff.sort(sortByYears);

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

//  # END:sortYears
} // 원본을 조작하지 않고, 원본 복사 후 정렬한 결과를 보여주기 때문에 사용자가 항상 같은 결과를 볼 수 있다. 

