import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';

export const FilterCheckboxGroup = ({ title, onChange, items }) => {
  return (
    <>
      <MenuOptionGroup title={title} type='checkbox' onChange={onChange}>
        {items.map(({ name, idx }) => (
          <MenuItemOption key={idx} value={idx}>
            {name}
          </MenuItemOption>
        ))}
      </MenuOptionGroup>
    </>
  );
};
