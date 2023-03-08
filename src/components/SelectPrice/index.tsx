import { Menu, MenuButton, MenuList, MenuItem, Box, Button } from '@chakra-ui/react';

export const SelectPrice = ({ setPrice }: number | null) => {
  return (
    <Box maxW='lg'>
      <Menu>
        <MenuButton as={Button}>금액</MenuButton>
        <MenuList>
          <MenuItem onClick={() => setPrice(1)}>10,000원 이하</MenuItem>
          <MenuItem onClick={() => setPrice(2)}>10,000원 이상 ~ 20,000원 이하</MenuItem>
          <MenuItem onClick={() => setPrice(3)}>20,000원 이상</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
