export interface CartItem {
  product: Product;
  quantity: number;
}

const useCart = () => {
  const addItemToCart = (product: Product) => {
    const existingCartItems = localStorage.getItem('cartItems');
    let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    const existingCartItem = cartItems.find((item: CartItem) => item.product.idx === product.idx);
    if (existingCartItem) {
      cartItems = cartItems.map((item: CartItem) =>
        item.product.idx === product.idx ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      cartItems = [...cartItems, { product, quantity: 1 }];
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const getCartTotal = () => {
    const existingCartItems = localStorage.getItem('cartItems');
    const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.quantity * item.product.price,
      0,
    );
  };

  return { addItemToCart, getCartTotal };
};

export default useCart;
