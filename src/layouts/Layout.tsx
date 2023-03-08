import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Nav } from './Nav';

export const Layout = () => {
  return (
    <Box maxW='1200' mx='auto'>
      <Nav />
      <Outlet />
    </Box>
  );
};
