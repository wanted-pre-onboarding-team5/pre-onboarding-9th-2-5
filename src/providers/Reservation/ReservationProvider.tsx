import { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

import { reservationReducer } from './reservationReducer';

import { TravelItemType } from '@/types/TravelItemType';

export const ACTION_RESERVATION = {
  init: 'init',
  remove: 'remove',
  plus: 'plus',
  minus: 'minus',
} as const;

type ReservationActionType = keyof typeof ACTION_RESERVATION;
export interface ReservationState {
  cart: TravelItemType[];
  totalItemCount: number;
  subtotal: number;
}

export interface ReservationAction {
  type: ReservationActionType;
  payload: TravelItemType[] | number;
}

const initialState: ReservationState = {
  cart: [],
  totalItemCount: 0,
  subtotal: 0,
};

const ReservationStateContext = createContext<ReservationState | null>(null);
const ReservationDispatchContext = createContext<Dispatch<ReservationAction> | null>(null);

const useReservationState = () => {
  const state = useContext(ReservationStateContext);
  if (!state) {
    throw new Error('Cannot find ReservationProvider');
  }
  return state;
};

const useReservationDispatch = () => {
  const dispatch = useContext(ReservationDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find ReservationProvider');
  }
  return dispatch;
};

const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  return (
    <ReservationStateContext.Provider value={state}>
      <ReservationDispatchContext.Provider value={dispatch}>
        {children}
      </ReservationDispatchContext.Provider>
    </ReservationStateContext.Provider>
  );
};

export { useReservationState, useReservationDispatch, ReservationProvider };
