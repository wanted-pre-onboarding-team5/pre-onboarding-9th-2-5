import { Box, Container } from '@chakra-ui/react';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Box>
      <Header />
      <Container as='main' minH='100vh'>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
