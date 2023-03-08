import { Heading } from '@chakra-ui/react';
import React from 'react';

import ProductList from '@/features/product-list';

function Main() {
  return (
    <div>
      <Heading size='md'>상품리스트</Heading>
      <ProductList />
    </div>
  );
}

export default Main;
