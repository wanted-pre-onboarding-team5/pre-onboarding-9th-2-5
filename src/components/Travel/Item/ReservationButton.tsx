import { Button } from '@chakra-ui/react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const ReservationButton = ({ itemData }) => {
  const { idx, name } = itemData;

  const handleReservationClick = () => {
    const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];
    const filteredReservations = reservations.filter((reservation) => reservation.idx !== idx);
    if (filteredReservations.length < reservations.length) {
      alert('이미 장바구니에 있는 상품이에요. 장바구니를 확인해 주세요.');
      return;
    }
    const reservation = { ...itemData, quantity: 1 };
    setLocalStorageItem(RESERVATIONS_KEY, [...filteredReservations, reservation]);
    alert(`장바구니에 [${name}] 상품이 잘 담겼어요!`);
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
