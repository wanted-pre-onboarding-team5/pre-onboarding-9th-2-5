import { RESERVATIONS_KEY } from '@/constants';
import { setLocalStorageItem, updateReservationStatus } from '@/utils';

import { ACTION_RESERVATION, ReservationAction, ReservationState } from './ReservationProvider';

import { TravelItemType } from '@/types/TravelItemType';

export const reservationReducer = (
  state: ReservationState,
  action: ReservationAction,
): ReservationState => {
  switch (action.type) {
    case ACTION_RESERVATION.init: {
      const reservations = action.payload as TravelItemType[];
      const { subtotal, totalItemCount } = updateReservationStatus(reservations);

      return {
        ...state,
        cart: reservations,
        subtotal,
        totalItemCount,
      };
    }
    case ACTION_RESERVATION.remove: {
      const { cart } = state;
      const idx = action.payload as number;
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
    case ACTION_RESERVATION.plus: {
      const { cart } = state;
      const idx = action.payload as number;
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
    case ACTION_RESERVATION.minus: {
      const { cart } = state;
      const idx = action.payload as number;

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
      return state;
  }
};
