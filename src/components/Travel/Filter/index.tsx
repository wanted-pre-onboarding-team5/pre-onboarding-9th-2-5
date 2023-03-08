import { Flex, Menu, MenuButton, MenuList, Button, MenuDivider } from '@chakra-ui/react';

import { useTravelDispatch } from '@/providers';

import { FilterCheckboxGroup } from '@/components/Travel/Filter/FilterCheckboxGroup';
import { FILTER_PRICE, FILTER_SPACE } from '@/constants/filter';

export const Filter = () => {
  const travelDispatch = useTravelDispatch();

  const handlePriceFilterChange = (filterArr) => {
    travelDispatch({
      type: 'priceFilter',
      payload: filterArr,
    });
  };

  const handleSpaceFilterChange = (filterArr) => {
    travelDispatch({
      type: 'spaceFilter',
      payload: filterArr,
    });
  };

  return (
    <Flex justifyContent='flex-end' mb='2'>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>
          Filter
        </MenuButton>
        <MenuList minWidth='240px'>
          <FilterCheckboxGroup
            title={'Price'}
            onChange={handlePriceFilterChange}
            items={FILTER_PRICE}
          />
          <MenuDivider />
          <FilterCheckboxGroup
            title={'Space'}
            onChange={handleSpaceFilterChange}
            items={FILTER_SPACE}
          />
        </MenuList>
      </Menu>
    </Flex>
  );
};
