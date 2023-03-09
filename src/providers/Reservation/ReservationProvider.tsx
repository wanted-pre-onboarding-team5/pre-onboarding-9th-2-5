import { createContext, useReducer, useContext } from 'react';

import { reservationReducer } from './reservationReducer';

const initialState = {
  cart: [],
  totalItemCount: 0,
  subTotal: 0,
};

const ReservationStateContext = createContext(undefined);
const ReservationDispatchContext = createContext(null);

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

const ReservationProvider = ({ children }) => {
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
