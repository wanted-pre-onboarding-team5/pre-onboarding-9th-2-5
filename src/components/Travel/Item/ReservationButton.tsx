import { Button } from '@chakra-ui/react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const ReservationButton = ({ itemData }) => {
  const { idx } = itemData;

  const handleReservationClick = () => {
    const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];
    const filteredReservations = reservations.filter((reservation) => reservation.idx !== idx);
    setLocalStorageItem(RESERVATIONS_KEY, [...filteredReservations, itemData]);
  };

  return (
    <>
      <Button
        colorScheme='facebook'
        _hover={{
          bgGradient: 'linear(to-r, red.300, yellow.300)',
        }}
        color='white'
        mr={3}
        onClick={handleReservationClick}
        fontWeight='bold'
      >
        예약하기
      </Button>
    </>
  );
};
