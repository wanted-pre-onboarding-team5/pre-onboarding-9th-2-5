import { RepeatIcon, StarIcon, SunIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Box } from '@chakra-ui/react';

import FilterItem from './filter-item';
import { useFilterContext, defaultFilter } from './filter-provider';

const filterList = [
  { name: 'space', items: ['서울', '강원', '대구', '부산', '제주'], icon: <StarIcon /> },
  { name: 'price', items: ['10000이하', '10000~30000', '30000이상'], icon: <SunIcon /> },
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
      <Box flexGrow='1' />
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
