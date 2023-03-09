import { Center, Flex, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import ListItem from './list-item';
import ListSummary from './list-summary';
import useReservationList from './use-reservation-list';

function ReservationList() {
  const { reservationList, refetch } = useReservationList();
  const navigate = useNavigate();
  return (
    <Flex flexDirection={'column'} gap='16px'>
      {reservationList.length === 0 ? (
        <Center flexDirection={'column'} gap='16px' height={300}>
          <Heading size={'md'}>예약된 상품이 없습니다</Heading>
          <Button onClick={() => navigate('/')}>상품 보러가기</Button>
        </Center>
      ) : (
        <>
          <Heading size='md'>예약된 상품</Heading>
          {reservationList.map((reservationItem) => (
            <ListItem key={reservationItem.idx} itemData={reservationItem} refetch={refetch} />
          ))}
          <ListSummary reservationList={reservationList} />
        </>
      )}
    </Flex>
  );
}

export default ReservationList;
