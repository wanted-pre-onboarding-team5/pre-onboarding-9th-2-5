import { Flex, Text, Box } from '@chakra-ui/react';

import { useReservationState } from '@/providers';

export const OrderSummary = () => {
  const { subtotal, totalItemCount } = useReservationState();

  return (
    <>
      <Flex p='4' bg='gray.200' borderRadius='base' flexDirection='column' mb='5'>
        <Text fontSize='3xl' fontWeight='bold'>
          Subtotal
        </Text>
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            π« {totalItemCount}κ°μ μνμ΄ λ΄κ²¨ μμ΅λλ€.
          </Text>
          <Text fontSize='xl' fontWeight='bold'>
            π° μ΄ κΈμ‘ : β©{subtotal.toLocaleString()}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
