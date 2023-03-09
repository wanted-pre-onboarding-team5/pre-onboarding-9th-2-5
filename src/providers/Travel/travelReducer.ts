import { filterTravelItems } from '@/utils';

export const travelReducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      const data = action.payload;

      return {
        ...state,
        data,
        filteredData: data,
      };
    }
    case 'priceFilter': {
      const { data, spaceFilter } = state;
      const priceFilter = action.payload;
      const filteredData = filterTravelItems(data, spaceFilter, priceFilter);

      return {
        ...state,
        priceFilter,
        filteredData,
      };
    }
    case 'spaceFilter': {
      const { data, priceFilter } = state;
      const spaceFilter = action.payload;
      const filteredData = filterTravelItems(data, spaceFilter, priceFilter);

      return {
        ...state,
        spaceFilter,
        filteredData,
      };
    }
    default:
      console.log('Invaild action type');
  }
};
