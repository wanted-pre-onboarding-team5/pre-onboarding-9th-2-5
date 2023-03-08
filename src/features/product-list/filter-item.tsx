import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

import { useFilterContext } from './filter-provider';

type Props = {
  filterData: {
    name: string;
    items: string[];
  };
};

function FilterItem({ filterData }: Props) {
  const { filter, setFilter } = useFilterContext();

  const changeMenuItem = (newFilter: string) => {
    setFilter({ ...filter, [filterData.name]: newFilter });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {filter[filterData.name] || filterData.name}
      </MenuButton>
      <MenuList>
        {filterData.items.map((item) => (
          <MenuItem key={item} onClick={() => changeMenuItem(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default FilterItem;
