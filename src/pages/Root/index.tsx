import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '@/components/common/Navbar';

export const Root = () => {
  return (
    <>
      <Navbar />
      <Box mx='150' my='50'>
        <Outlet />
      </Box>
    </>
  );
};
