import { Box } from '@chakra-ui/react';

import { RESERVATIONS_KEY } from '@/constants';
import { ReservationProvider } from '@/providers';
import { getLocalStorageItem } from '@/utils';

import { OrderSummary } from '@/components/OrderSummary';
import { ReservationBox } from '@/components/Reservation/Box';

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
    <ReservationProvider>
      <OrderSummary />
      <ReservationBox reservationData={reservations} />
    </ReservationProvider>
  );
};
