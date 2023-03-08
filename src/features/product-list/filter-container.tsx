import { RepeatIcon, StarIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Spacer } from '@chakra-ui/react';

import FilterItem from './filter-item';
import { useFilterContext, defaultFilter } from './filter-provider';

const filterList = [
  { name: 'spaceCategory', items: ['서울', '강원', '대구', '부산', '제주'], icon: <StarIcon /> },
  { name: 'price', items: ['0~10000', '10000~20000', '20000~30000'], icon: <SunIcon /> },
];

function FilterContainer() {
  const { setFilter } = useFilterContext();

  const resetFilter = () => {
    setFilter(defaultFilter);
  };

  return (
    <HStack my={'16px'}>
      {filterList.map((filter) => (
        <FilterItem key={filter.name} filterData={filter} />
      ))}
      <Spacer />
      <IconButton
        aria-label='reset-filter'
        icon={<RepeatIcon />}
        onClick={resetFilter}
        variant='outline'
      />
    </HStack>
  );
}

export default FilterContainer;
