import { Flex } from '@chakra-ui/react';
import React from 'react';

import ListItem from './list-item';
import reservationService from './reservation-service';

function ReservationList() {
  const reservedList = reservationService.getItem();

  return (
    <Flex flexDirection={'column'} gap='16px'>
      {reservedList.map((reservedItem) => (
        <ListItem key={reservedItem.idx} itemData={reservedItem} />
      ))}
    </Flex>
  );
}

export default ReservationList;
