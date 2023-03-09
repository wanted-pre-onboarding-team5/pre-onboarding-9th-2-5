import { Box } from '@chakra-ui/react';

import { getLocalStorageItem } from '@/utils';

import { ReservationItem } from '@/components/Reservation/Item/ReservationItem';
import { RESERVATIONS_KEY } from '@/constants/storage';

export const Reservations = () => {
  const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];

  if (!reservations.length) {
    return (
      <Box fontSize='lg' textAlign='center' fontWeight='bold'>
        장바구니가 비어있어요. 💨
      </Box>
    );
  }

  return (
    <>
      <div>
        {reservations.map((props, i) => {
          return <ReservationItem key={i} {...props} />;
        })}
      </div>
    </>
  );
};
