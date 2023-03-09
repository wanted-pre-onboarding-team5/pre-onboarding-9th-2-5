import { FILTER_PRICE_RANGE } from '@/constants';

const getPriceRangeFilter = (priceFilter) => {
  return priceFilter.map((idx) => FILTER_PRICE_RANGE[idx]);
};

export const filterTravelItems = (data, spaceFilter, priceFilter) => {
  if (!spaceFilter.length && !priceFilter.length) {
    return data;
  }

  if (!spaceFilter.length && priceFilter.length) {
    const priceRangeFilter = getPriceRangeFilter(priceFilter);
    return data.filter(({ price }) => {
      return priceRangeFilter.some(({ min, max }) => {
        return price >= min && price < max;
      });
    });
  }

  if (!priceFilter.length && spaceFilter.length) {
    return data.filter(({ spaceCategory }) => {
      return spaceFilter.includes(spaceCategory);
    });
  }

  const filteredTravelItems = [];
  const priceRangeFilter = getPriceRangeFilter(priceFilter);

  spaceFilter.forEach((space) => {
    priceRangeFilter.forEach(({ min, max }) => {
      const filteredData = data.filter(({ spaceCategory, price }) => {
        return price >= min && price < max && spaceCategory === space;
      });

      filteredData.forEach((data) => {
        filteredTravelItems.push(data);
      });
    });
  });

  return filteredTravelItems;
};
