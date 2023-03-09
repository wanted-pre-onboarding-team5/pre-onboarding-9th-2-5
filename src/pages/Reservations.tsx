import { Heading } from '@chakra-ui/react';
import React from 'react';

import ReservationList from '@/features/reservation';

function Reservations() {
  return (
    <div>
      <Heading size='md'>예약된 상품</Heading>
      <ReservationList />
    </div>
  );
}

export default Reservations;
