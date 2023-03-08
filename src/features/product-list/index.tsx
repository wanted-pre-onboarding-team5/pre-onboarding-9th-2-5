import React from 'react';

import FilterContainer from './filter-container';
import FilterProvider from './filter-provider';
import ListContainer from './list-container';

function ProductList() {
  return (
    <FilterProvider>
      <FilterContainer />
      <ListContainer />
    </FilterProvider>
  );
}

export default ProductList;
