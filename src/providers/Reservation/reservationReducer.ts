import { setLocalStorageItem } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const reservationReducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      const reservations = action.payload;

      return {
        ...state,
        cart: reservations,
      };
    }
    case 'remove': {
      const { cart } = state;
      const idx = action.payload;
      const updatedCart = cart.filter((item) => item.idx !== idx);
      setLocalStorageItem(RESERVATIONS_KEY, updatedCart);

      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      console.log('Invaild action type');
  }
};
