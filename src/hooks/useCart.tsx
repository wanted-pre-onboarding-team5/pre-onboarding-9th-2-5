import { useEffect, useState } from 'react';

import { Product } from '@/apis/travelApi.type';

interface CartItem {
  product: Product;
  quantity: number;
}

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product: Product) => {
    const existingCartItem = cartItems.find((item) => item.product.idx === product.idx);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product.idx === product.idx ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  return { cartItems, addItemToCart };
};

export default useCart;
