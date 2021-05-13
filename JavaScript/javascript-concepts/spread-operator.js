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
]; // 안할인상품 2개 + 할인상품 1개 

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
// cart의 할인중인 상품 갯수를 파악해서 2개 이상이면 에러 호출하고, 아니면 카트에 사은품 추가하고나서 카트 안의 정보를 보여주는 함수. 
function summarizeCart(cart) {
    const discountable = cart.filter(item => item.discount);  
    if (discountable.length > 1) { // 카트의 할인상품 갯수를 파악해서 2개 이상이면 에러 호출. 
    return {
        error: 'Can only have one discount',
    };
    }
    const cartWithReward = addFreeGift(cart);  // 즉시 실행된다. 카트에 3개이상 있으면 사은품 추가됨. 
    console.log(cart.length); // 4
    return {
    discounts: discountable.length, // 반환된 카트의 할인상품 갯수. 카트에 사은품이 추가되었으니 사은품까지 합한것이 될듯?
    items: cartWithReward.length, //   사은품 추가 후 카트 안의 상품갯수 
    cart: cartWithReward, // 사은품 추가된 카드 배열. 
    };
}

console.log(summarizeCart(cart));
console.log(cart.length);// 4 
}

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
    const cartWithReward = addFreeGift(cart); //  
    console.log(cart.length); // 4 -> 할인상품 2개
    const discountable = cart.filter(item => item.discount); // 카트 안의 할인상품 갯수. 이미 카트에 할인상품이 2개이므로 오류가 나버린다.   
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

console.log(summarizeCartUpdated(cart));
}