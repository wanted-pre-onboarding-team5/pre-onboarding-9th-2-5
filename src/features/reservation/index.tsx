import { Flex } from '@chakra-ui/react';
import React from 'react';

import ListItem from './list-item';
import ListSummary from './list-summary';
import reservationService from './reservation-service';

function ReservationList() {
  const reservedList = reservationService.getReservedList();
  const [reservedListState] = React.useState(reservedList);

  return (
    <Flex flexDirection={'column'} gap='16px'>
      {reservedList.map((reservedItem) => (
        <ListItem key={reservedItem.idx} itemData={reservedItem} />
      ))}
      <ListSummary reservedListState={reservedListState} />
    </Flex>
  );
}

export default ReservationList;
