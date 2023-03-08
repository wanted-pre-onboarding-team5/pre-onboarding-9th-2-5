import { createContext, useReducer, useContext } from 'react';

import { travelReducer } from './travelReducer';

const initialState = {
  data: [],
  filteredData: [],
  priceFilter: [],
  spaceFilter: [],
};

const TravelStateContext = createContext(undefined);
const TravelDispatchContext = createContext(null);

const useTravelState = () => {
  const state = useContext(TravelStateContext);
  if (!state) {
    throw new Error('Cannot find TravelProvider');
  }
  return state;
};

const useTravelDispatch = () => {
  const dispatch = useContext(TravelDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find TravelProvider');
  }
  return dispatch;
};

const TravelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(travelReducer, initialState);

  return (
    <TravelStateContext.Provider value={state}>
      <TravelDispatchContext.Provider value={dispatch}>{children}</TravelDispatchContext.Provider>
    </TravelStateContext.Provider>
  );
};

export { useTravelState, useTravelDispatch, TravelProvider };
