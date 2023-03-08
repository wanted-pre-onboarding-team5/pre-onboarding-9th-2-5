import { VStack } from '@chakra-ui/react';
import React from 'react';

import ListItem from './list-item';

import mockData from '@/mocks/data.json';

function ListContainer() {
  return (
    <VStack gap={'8px'}>
      {mockData.map((mockItem) => (
        <ListItem key={mockItem.idx} itemData={mockItem} />
      ))}
    </VStack>
  );
}

export default ListContainer;
