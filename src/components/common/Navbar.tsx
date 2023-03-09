import { Flex, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

export const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    fontWeight: 'bold',
  };

  return (
    <Box bg='gray.200' p='4'>
      <Flex mx='150' justifyContent='space-between' fontSize='lg'>
        <NavLink
          to={PATH_ROUTE.main}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Main 🏝️
        </NavLink>
        <NavLink
          to={PATH_ROUTE.reservations}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Reservations 🎫
        </NavLink>
      </Flex>
    </Box>
  );
};
