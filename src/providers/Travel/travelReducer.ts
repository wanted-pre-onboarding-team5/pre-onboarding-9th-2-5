import { filterTravelItems } from '@/utils';

import { ACTION_TRAVEL, TravelAction, TravelState } from './TravelProvider';

import { TravelItemType } from '@/types/TravelItemType';

export const travelReducer = (state: TravelState, action: TravelAction): TravelState => {
  switch (action.type) {
    case ACTION_TRAVEL.init: {
      const data = action.payload as TravelItemType[];

      return {
        ...state,
        data,
        filteredData: data,
      };
    }
    case ACTION_TRAVEL.priceFilter: {
      const { data, spaceFilter } = state;
      const priceFilter = action.payload as string[];
      const filteredData = filterTravelItems(data, spaceFilter, priceFilter);

      return {
        ...state,
        priceFilter,
        filteredData,
      };
    }
    case ACTION_TRAVEL.spaceFilter: {
      const { data, priceFilter } = state;
      const spaceFilter = action.payload as string[];
      const filteredData = filterTravelItems(data, spaceFilter, priceFilter);

      return {
        ...state,
        spaceFilter,
        filteredData,
      };
    }
    default:
      return state;
  }
};
