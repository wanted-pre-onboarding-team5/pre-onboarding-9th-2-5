import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Nav } from './Nav';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box maxW='1200' mx='auto'>
      <Nav />
      {children}
    </Box>
  );
};
