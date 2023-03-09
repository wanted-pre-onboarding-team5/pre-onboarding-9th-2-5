import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { ReserveItemsList } from '@/components/ReserveItemsList';
import { mockDataType } from '@/types/type';

export const Reservation = () => {
  const reserveItemsLoader = useLoaderData() as mockDataType[];
  const [reserveItems, setReserveItems] = useState(reserveItemsLoader);

  const deleteHandler = (idx: number) => {
    let deleteItem = JSON.parse(localStorage.getItem('reserv_item_info'));
    deleteItem = deleteItem.filter((item) => item.idx !== idx);
    localStorage.setItem('reserv_item_info', JSON.stringify(deleteItem));
    getLocalStorageItem();
  };

  const getLocalStorageItem = () => {
    setReserveItems(JSON.parse(localStorage.getItem('reserv_item_info') || '[]'));
  };

  return (
    <Container maxW='4xl'>
      <Box mb={10} mt={10}>
        <Heading>예약현황</Heading>
      </Box>
      {reserveItems.length !== 0 ? (
        <>
          {reserveItems.map((reserveItem) => (
            <div key={reserveItem.idx}>
              <ReserveItemsList reserveItem={reserveItem} deleteHandler={deleteHandler} />
            </div>
          ))}
        </>
      ) : (
        <Flex align='center' justify='center' direction='column' h='50vh' gap={10}>
          <Text fontSize='3xl' fontWeight={700}>
            예약한 상품이 없어요 !
          </Text>
          <Button>
            <Link to={'/main'}>여행 상품 보러가기</Link>
          </Button>
        </Flex>
      )}
    </Container>
  );
};
