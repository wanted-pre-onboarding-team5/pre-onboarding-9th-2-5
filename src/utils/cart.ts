export const calcSubtotal = (cart) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity * cur.price;
    return acc;
  }, 0);
};

export const calcTotalItemCount = (cart) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0);
};
