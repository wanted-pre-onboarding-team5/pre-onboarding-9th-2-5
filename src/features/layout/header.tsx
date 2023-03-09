import { Box, Container, HStack, Spacer, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Box borderBottom={'1px solid #efefef'} marginBottom='16px'>
      <Container py={'8px'}>
        <HStack>
          <Button
            variant={'unstyled'}
            onClick={() => {
              navigate('/main');
            }}
          >
            Like A Local
          </Button>
          <Spacer />
          <Button
            colorScheme='blue'
            variant={'ghost'}
            onClick={() => {
              navigate('/reservations');
            }}
          >
            장바구니
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}

export default Header;
