import { Flex, Heading, TableContainer, Thead, Tr, Th, Table, Tbody } from '@chakra-ui/react';

import { ReservationItem } from '@/components/Reservation/Item/ReservationItem';

export const ReservationBox = ({ reservationData }) => {
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
            {reservationData.map((props, i) => {
              return <ReservationItem key={i} {...props} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};
