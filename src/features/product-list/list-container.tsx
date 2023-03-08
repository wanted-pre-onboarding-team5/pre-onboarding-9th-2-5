import { VStack } from '@chakra-ui/react';
import React from 'react';

import { useFilterContext } from './filter-provider';
import ListItem from './list-item';

import mockData from '@/mocks/data.json';

function ListContainer() {
  const { filter } = useFilterContext();
  return (
    <VStack gap={'8px'}>
      {mockData
        .filter((mockData) => {
          for (const [key, value] of Object.entries(filter)) {
            if (!filter[key]) continue;

            if (key === 'price') {
              const [min, max] = value.split('~');
              if (mockData.price < Number(min) || mockData.price > Number(max)) return false;
            } else {
              if (filter.spaceCategory !== mockData.spaceCategory) return false;
            }
          }
          return true;
        })
        .map((mockItem) => (
          <ListItem key={mockItem.idx} itemData={mockItem} />
        ))}
    </VStack>
  );
}

export default ListContainer;
