import { setLocalStorageItem, updateReservationStatus } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      const reservations = action.payload;
      const { subtotal, totalItemCount } = updateReservationStatus(reservations);

      return {
        ...state,
        cart: reservations,
        subtotal,
        totalItemCount,
      };
    }
    case 'remove': {
      const { cart } = state;
      const idx = action.payload;
      const updatedCart = cart.filter((item) => item.idx !== idx);
      setLocalStorageItem(RESERVATIONS_KEY, updatedCart);
      const { subtotal, totalItemCount } = updateReservationStatus(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        subtotal,
        totalItemCount,
      };
    }
    case 'plus': {
      const { cart } = state;
      const idx = action.payload;
      const updatedCart = cart.map((item) => {
        if (item.idx === idx) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setLocalStorageItem(RESERVATIONS_KEY, updatedCart);
      const { subtotal, totalItemCount } = updateReservationStatus(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        subtotal,
        totalItemCount,
      };
    }
    case 'minus': {
      const { cart } = state;
      const idx = action.payload;

      const updatedCart = cart.map((item) => {
        if (item.idx === idx) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setLocalStorageItem(RESERVATIONS_KEY, updatedCart);
      const { subtotal, totalItemCount } = updateReservationStatus(updatedCart);

      return {
        ...state,
        cart: updatedCart,
        subtotal,
        totalItemCount,
      };
    }
    default:
      console.log('Invaild action type');
  }
};
