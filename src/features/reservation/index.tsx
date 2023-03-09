import { Flex } from '@chakra-ui/react';
import React from 'react';

import ListItem from './list-item';
import ListSummary from './list-summary';
import useReservationList from './use-reservation-list';

function ReservationList() {
  const { reservationList, refetch } = useReservationList();

  return (
    <Flex flexDirection={'column'} gap='16px'>
      {reservationList.map((reservationItem) => (
        <ListItem key={reservationItem.idx} itemData={reservationItem} refetch={refetch} />
      ))}
      <ListSummary reservationList={reservationList} />
    </Flex>
  );
}

export default ReservationList;
