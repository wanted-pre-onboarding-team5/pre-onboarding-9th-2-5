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
            🎫 {totalItemCount}개의 상품이 담겨 있습니다.
          </Text>
          <Text fontSize='xl' fontWeight='bold'>
            💰 총 금액 : ₩{subtotal.toLocaleString()}
          </Text>
        </Box>
      </Flex>
    </>
  );
};
