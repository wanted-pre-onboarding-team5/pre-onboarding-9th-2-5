import { Heading } from '@chakra-ui/react';
import React from 'react';

import FilterContainer from './filter-container';
import FilterProvider from './filter-provider';
import ListContainer from './list-container';

function ProductList() {
  return (
    <FilterProvider>
      <Heading size='md'>상품리스트</Heading>
      <FilterContainer />
      <ListContainer />
    </FilterProvider>
  );
}

export default ProductList;
