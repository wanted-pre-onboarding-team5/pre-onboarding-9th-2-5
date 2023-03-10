import { Box, Button, Flex } from '@chakra-ui/react';

interface QuantityButtonProps {
  quantity: number;
  onPlus: () => void;
  onMinus: () => void;
}

export const QuantityButton = ({ quantity, onPlus, onMinus }: QuantityButtonProps) => {
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
