import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { useFilterContext } from './filter-provider';

type Props = {
  filterData: {
    name: string;
    items: string[];
    icon: JSX.Element;
  };
};

function FilterItem({ filterData }: Props) {
  const { filter, setFilter } = useFilterContext();

  const changeMenuItem = (newFilter: string) => {
    setFilter({ ...filter, [filterData.name]: newFilter });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant='outline'>
        <HStack>
          {filterData.icon} <span>{filter[filterData.name] || filterData.name}</span>
        </HStack>
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
