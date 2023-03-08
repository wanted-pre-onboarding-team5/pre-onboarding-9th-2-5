import { RepeatIcon } from '@chakra-ui/icons';
import { HStack, IconButton } from '@chakra-ui/react';

import FilterItem from './filter-item';
import { useFilterContext, defaultFilter } from './filter-provider';

const filterList = [
  { name: 'space', items: ['서울', '강원', '대구', '부산', '제주'] },
  { name: 'price', items: ['10000이하', '10000~30000', '30000이상'] },
];

function FilterContainer() {
  const { setFilter } = useFilterContext();

  const resetFilter = () => {
    setFilter(defaultFilter);
  };
  return (
    <HStack>
      {filterList.map((filter) => (
        <FilterItem key={filter.name} filterData={filter} />
      ))}
      <IconButton aria-label='reset-filter' icon={<RepeatIcon />} onClick={resetFilter} />
    </HStack>
  );
}

export default FilterContainer;
