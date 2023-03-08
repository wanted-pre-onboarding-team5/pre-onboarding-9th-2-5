import React from 'react';

import FilterContainer from './filter-container';
import FilterProvider from './filter-provider';

function ProductList() {
  return (
    <FilterProvider>
      <FilterContainer />
    </FilterProvider>
  );
}

export default ProductList;
