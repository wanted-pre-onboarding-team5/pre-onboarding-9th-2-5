import { Box, Flex, Text } from '@chakra-ui/react';

import ReservationItem from './ReservationItem';

export interface Reservation {
  product: Product;
  quantity: number;
}

interface ReservationsListProps {
  reservations: Reservation[];
}

export const ReservationsList = ({ reservations }: ReservationsListProps) => {
  return (
    <Box>
      {reservations.map((reservation) => (
        <Flex key={reservation.product.idx} alignItems='center' py={4}>
          <ReservationItem reservation={reservation} />
        </Flex>
      ))}
      <Flex alignItems='center' justifyContent='flex-end' pt={4}>
        <Text fontSize='2xl' fontWeight='bold'>
          Total: {reservations.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0)}
        </Text>
      </Flex>
    </Box>
  );
};
