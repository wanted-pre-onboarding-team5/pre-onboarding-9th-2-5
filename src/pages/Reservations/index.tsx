import { Box, Heading, Stack, Text } from '@chakra-ui/react';

import { Layout } from '@/components/common/Layout';
import { ReservationsList } from '@/components/Reservations/ReservationsList';

export interface ReservationsData {
  product: Product;
  quantity: number;
}

export const Reservations = (): JSX.Element => {
  const reservationsString = localStorage.getItem('cartItems');
  const reservations: ReservationsData[] = reservationsString ? JSON.parse(reservationsString) : [];

  const totalReservations = reservations.length;

  return (
    <Layout>
      <Heading as='h1' size='xl' mb={6}>
        Reservations
      </Heading>

      <Stack spacing={6}>
        <Box>
          <Text fontWeight='semibold' fontSize='lg'>
            Total reservations: {totalReservations}
          </Text>
        </Box>

        <ReservationsList reservations={reservations} />
      </Stack>
    </Layout>
  );
};
