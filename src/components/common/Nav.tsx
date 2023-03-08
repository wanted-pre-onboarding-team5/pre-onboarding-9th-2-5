import { Button, Flex, Box, Heading, Spacer, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <Box p='2'>
        <Heading size='md'>Like A Local</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='blue'>
          <Link to='/main'>MAIN</Link>
        </Button>
        <Button colorScheme='blue'>
          <Link to='/reservations'>CART</Link>
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
