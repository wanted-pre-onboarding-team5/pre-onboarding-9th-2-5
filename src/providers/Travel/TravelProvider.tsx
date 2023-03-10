import { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

import { travelReducer } from './travelReducer';

import { TravelItemType } from '@/types/TravelItemType';

export const ACTION_TRAVEL = {
  init: 'init',
  priceFilter: 'priceFilter',
  spaceFilter: 'spaceFilter',
} as const;

type TravelActionType = keyof typeof ACTION_TRAVEL;
export interface TravelState {
  data: TravelItemType[];
  filteredData: TravelItemType[];
  priceFilter: string[];
  spaceFilter: string[];
}

export interface TravelAction {
  type: TravelActionType;
  payload: TravelItemType[] | string[];
}

const initialState: TravelState = {
  data: [],
  filteredData: [],
  priceFilter: [],
  spaceFilter: [],
};

const TravelStateContext = createContext<TravelState | null>(null);
const TravelDispatchContext = createContext<Dispatch<TravelAction> | null>(null);

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

const TravelProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(travelReducer, initialState);

  return (
    <TravelStateContext.Provider value={state}>
      <TravelDispatchContext.Provider value={dispatch}>{children}</TravelDispatchContext.Provider>
    </TravelStateContext.Provider>
  );
};

export { useTravelState, useTravelDispatch, TravelProvider };
