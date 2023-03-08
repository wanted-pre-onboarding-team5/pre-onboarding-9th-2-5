import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
