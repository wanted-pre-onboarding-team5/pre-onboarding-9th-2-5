import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';

import { Filter } from '@/constants';

interface FilterCheckboxGroupProps {
  title: string;
  onChange: (value: string | string[]) => void;
  items: ReadonlyArray<Filter>;
}

export const FilterCheckboxGroup = ({ title, onChange, items }: FilterCheckboxGroupProps) => {
  return (
    <>
      <MenuOptionGroup title={title} type='checkbox' onChange={onChange}>
        {items.map(({ name, idx }) => (
          <MenuItemOption key={idx} value={idx.toString()}>
            {name}
          </MenuItemOption>
        ))}
      </MenuOptionGroup>
    </>
  );
};
