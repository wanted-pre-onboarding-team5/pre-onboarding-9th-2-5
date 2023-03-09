import { Box, Button, Flex } from '@chakra-ui/react';

export const QuantityButton = ({ quantity, setQuantity }) => {
  return (
    <Flex alignItems='center' p='3'>
      <Button
        size='sm'
        variant='solid'
        colorScheme='facebook'
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </Button>
      <Box fontSize='lg' fontWeight='bold' p='3' width='50px' textAlign='center'>
        {quantity}
      </Box>
      <Button
        size='sm'
        variant='solid'
        colorScheme='facebook'
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
    </Flex>
  );
};
