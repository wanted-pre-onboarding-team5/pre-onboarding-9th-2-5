import { Box, Button, Flex } from '@chakra-ui/react';

export const QuantityButton = ({ quantity, onPlus, onMinus }) => {
  return (
    <Flex alignItems='center'>
      <Button size='sm' variant='solid' colorScheme='facebook' onClick={onMinus}>
        -
      </Button>
      <Box fontSize='lg' fontWeight='bold' p='3' width='50px' textAlign='center'>
        {quantity}
      </Box>
      <Button size='sm' variant='solid' colorScheme='facebook' onClick={onPlus}>
        +
      </Button>
    </Flex>
  );
};
