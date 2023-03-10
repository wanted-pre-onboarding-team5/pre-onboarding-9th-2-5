import { TravelItemType } from '@/types/TravelItemType';

type CartUtilFunctionParam = TravelItemType[];

const calcSubtotal = (cart: CartUtilFunctionParam) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity * cur.price;
    return acc;
  }, 0);
};

const calcTotalItemCount = (cart: CartUtilFunctionParam) => {
  return cart.reduce((acc, cur) => {
    acc += cur.quantity;
    return acc;
  }, 0);
};

export const updateReservationStatus = (cart: CartUtilFunctionParam) => {
  const subtotal = calcSubtotal(cart);
  const totalItemCount = calcTotalItemCount(cart);

  return { subtotal, totalItemCount };
};
