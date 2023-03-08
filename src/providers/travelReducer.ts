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
      return {
        ...state,
        priceFilter: action.payload,
      };
    }
    case 'spaceFilter': {
      const { data } = state;
      const spaceFilter = action.payload;
      const filteredData = data.filter((v) => spaceFilter.includes(v.spaceCategory));

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
