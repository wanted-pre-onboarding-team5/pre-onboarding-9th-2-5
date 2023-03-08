import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Flex justifyContent='end' mt='5' gap='4'>
      <Button colorScheme='blue'>
        <Link to='/main'>HOME</Link>
      </Button>
      <Button colorScheme='blue'>
        <Link to='/reservations'>장바구니</Link>
      </Button>
    </Flex>
  );
};
