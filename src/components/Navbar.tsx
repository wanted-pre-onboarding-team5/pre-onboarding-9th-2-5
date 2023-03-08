import { Flex, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

export const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    fontWeight: 'bold',
  };

  return (
    <Flex bg='gray.100' p='4'>
      <NavLink to={PATH_ROUTE.main} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Main 🏝️
      </NavLink>
      <Spacer />
      <NavLink
        to={PATH_ROUTE.reservations}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Reservations 🛒
      </NavLink>
    </Flex>
  );
};
