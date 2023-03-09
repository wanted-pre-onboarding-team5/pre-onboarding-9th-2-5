import { Button, useToast } from '@chakra-ui/react';

import { getToastCartSuccessOption, TOAST_CART_INFO_OPTION } from '@/constants';
import { getLocalStorageItem, setLocalStorageItem } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const ReservationButton = ({ itemData, quantity }) => {
  const { idx, name } = itemData;
  const toast = useToast();

  const handleReservationClick = () => {
    const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];
    const filteredReservations = reservations.filter((reservation) => reservation.idx !== idx);
    if (filteredReservations.length < reservations.length) {
      toast(TOAST_CART_INFO_OPTION);
      return;
    }
    const reservation = { ...itemData, quantity };
    setLocalStorageItem(RESERVATIONS_KEY, [...filteredReservations, reservation]);
    toast(getToastCartSuccessOption(name, quantity));
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
