import { Flex, Heading, TableContainer, Thead, Tr, Th, Table, Tbody } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useReservationDispatch, useReservationState } from '@/providers';

import { ReservationItem } from '@/components/Reservation/Item/ReservationItem';
import { TravelItemType } from '@/types/TravelItemType';

interface ReservationBoxProps {
  reservationData: TravelItemType[];
}

export const ReservationBox = ({ reservationData }: ReservationBoxProps) => {
  const reservationDispatch = useReservationDispatch();
  const { cart } = useReservationState();

  useEffect(() => {
    reservationDispatch({ type: 'init', payload: reservationData });
  }, []);

  return (
    <Flex flexDirection='column'>
      <Heading size='lg' mb='5'>
        Shopping Cart
      </Heading>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Product Details</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((props, i) => {
              return <ReservationItem key={i} {...props} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
