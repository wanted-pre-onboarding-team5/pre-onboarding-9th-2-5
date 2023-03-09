import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from './footer';
import Header from './header';

function Layout() {
  return (
    <Box>
      <Header />
      <Container as='main' minH='100vh'>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
