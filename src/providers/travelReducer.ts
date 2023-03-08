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
      const { data, filteredData, spaceFilter } = state;
      const priceFilter = action.payload.map((filter) => {
        const [min, max] = filter.split(' ').map(Number);
        return { min, max };
      });
      const standardData = spaceFilter.length ? filteredData : data;
      const newFilteredData = standardData.filter(({ price }) => {
        return priceFilter.some(({ min, max }) => {
          return price >= min && price < max;
        });
      });

      return {
        ...state,
        priceFilter,
        filteredData: newFilteredData,
        isFilterSelected: priceFilter.length + spaceFilter.length > 0,
      };
    }
    case 'spaceFilter': {
      const { data, filteredData, priceFilter } = state;
      const spaceFilter = action.payload;
      const standardData = priceFilter.length ? filteredData : data;
      const newFilteredData = standardData.filter(({ spaceCategory }) => {
        return spaceFilter.includes(spaceCategory);
      });

      return {
        ...state,
        spaceFilter,
        filteredData: newFilteredData,
        isFilterSelected: priceFilter.length + spaceFilter.length > 0,
      };
    }
    default:
      console.log('Invaild action type');
  }
};
