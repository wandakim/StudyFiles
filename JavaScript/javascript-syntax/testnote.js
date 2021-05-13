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
    const discountable = cart.filter(item => item.discount); // 카트 안의 할인상품 갯수. 2개이므로 오류가 나버린다.   
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