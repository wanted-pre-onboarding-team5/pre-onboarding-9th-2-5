import { Flex, Menu, MenuButton, MenuList, Button, MenuDivider } from '@chakra-ui/react';

import { FILTER_PRICE, FILTER_SPACE } from '@/constants';
import { useTravelDispatch } from '@/providers';

import { FilterCheckboxGroup } from '@/components/Travel/Filter/FilterCheckboxGroup';

export const Filter = () => {
  const travelDispatch = useTravelDispatch();

  const handlePriceFilterChange = (value: string | string[]) => {
    if (typeof value === 'string') return;
    travelDispatch({
      type: 'priceFilter',
      payload: value,
    });
  };

  const handleSpaceFilterChange = (value: string | string[]) => {
    if (typeof value === 'string') return;
    travelDispatch({
      type: 'spaceFilter',
      payload: value,
    });
  };

  return (
    <Flex justifyContent='flex-end' mb='2'>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='facebook'>
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
