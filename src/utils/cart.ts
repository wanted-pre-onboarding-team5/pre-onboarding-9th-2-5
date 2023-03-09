const calcSubtotal = (cart) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity * cur.price;
    return acc;
  }, 0);
};

const calcTotalItemCount = (cart) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0);
};

export const updateReservationStatus = (cart) => {
  const subtotal = calcSubtotal(cart);
  const totalItemCount = calcTotalItemCount(cart);

  return { subtotal, totalItemCount };
};
