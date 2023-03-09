import { VStack } from '@chakra-ui/react';
import React from 'react';

import { useFilterContext } from './filter-provider';
import ListItem, { MockItemType } from './list-item';

import mockData from '@/mocks/data.json';

function ListContainer() {
  const { filter } = useFilterContext();

  // TODO: FilterStrategy를 기존의 Context와 연결해보자
  const filterStrategy = (mockData: MockItemType) => {
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
  };

  return (
    <VStack gap={'8px'}>
      {mockData.filter(filterStrategy).map((mockItem) => (
        <ListItem key={mockItem.idx} itemData={mockItem} />
      ))}
    </VStack>
  );
}

export default ListContainer;
