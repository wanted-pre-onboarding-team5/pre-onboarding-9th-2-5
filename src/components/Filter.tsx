import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Button,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import { useTravelDispatch } from '@/providers';

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
          <MenuOptionGroup title='Price' type='checkbox' onChange={handlePriceFilterChange}>
            {FILTER_PRICE.map(({ name, min, max }, i) => (
              <MenuItemOption key={i} value={`${min} ${max}`}>
                {name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title='Space' type='checkbox' onChange={handleSpaceFilterChange}>
            {FILTER_SPACE.map((space, i) => (
              <MenuItemOption key={i} value={space}>
                {space}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};
