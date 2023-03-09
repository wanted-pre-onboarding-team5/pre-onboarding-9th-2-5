import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Text, Heading, HStack, Button } from '@chakra-ui/react';
import React from 'react';

export interface Reservation {
  product: Product;
  quantity: number;
}

const ReservationItem = ({ reservation }: { reservation: Reservation }) => {
  const quantityRef = React.useRef(reservation.quantity);

  const reservations = JSON.parse(window.localStorage.getItem('cartItems') || '[]');
  const indexToUpdate = reservations.findIndex(
    (reservationLocal: Reservation) => reservationLocal.product.idx === reservation.product.idx,
  );

  const handleQuantityIncrease = () => {
    const newQuantity = quantityRef.current + 1;
    if (newQuantity <= reservation.product.maximumPurchases) {
      if (indexToUpdate !== -1) {
        reservations[indexToUpdate].quantity = newQuantity;
      }

      window.localStorage.setItem('cartItems', JSON.stringify(reservations));
    }
    window.location.reload();
  };

  const handleQuantityDecrease = () => {
    const newQuantity = quantityRef.current - 1;
    if (newQuantity >= 1) {
      if (indexToUpdate !== -1) {
        reservations[indexToUpdate].quantity = newQuantity;
      }

      window.localStorage.setItem('cartItems', JSON.stringify(reservations));
    }
    window.location.reload();
  };

  const handleDeleteReservation = () => {
    reservations.splice(indexToUpdate, 1);
    window.localStorage.setItem('cartItems', JSON.stringify(reservations));
    window.location.reload();
  };

  const quantity = quantityRef.current;

  return (
    <Box width={'100%'} position='relative'>
      <Flex
        css={`
          border: 1px solid #efefef;
          border-radius: 8px;
          width: 100%;
          padding: 16px;
          gap: 16px;
        `}
      >
        <Image src={reservation.product.mainImage} borderRadius='8px' width={150} height={100} />
        <Flex flexDirection='column' flexGrow='1'>
          <Flex flexDirection='row' justifyContent='space-between'>
            <Text>No. {reservation.product.idx}</Text>
            <Text>등록날짜 : {reservation.product.registrationDate}</Text>
            <Text>총 개수 : {reservation.product.maximumPurchases}</Text>
          </Flex>

          <Text fontSize='xs' color='rgb(30 58 138)' fontWeight={600}>
            {reservation.product.description}
          </Text>
          <Heading size='sm' my='4px' flexGrow='1'>
            {reservation.product.name}
          </Heading>
          <Flex alignItems='center'>
            <Text color='gray.500'>Quantity: </Text>
            <Button onClick={handleQuantityDecrease} marginRight='8px'>
              -
            </Button>
            <Text>{quantity}</Text>
            <Button onClick={handleQuantityIncrease} marginLeft='8px'>
              +
            </Button>
          </Flex>
          <Button onClick={handleDeleteReservation} marginLeft='8px'>
            delete
          </Button>

          <Flex justifyContent={'space-between'}>
            <HStack style={{ fontSize: '0.8rem' }}>
              <StarIcon /> <span>{reservation.product.spaceCategory}</span>
            </HStack>
            <span style={{ fontWeight: 'bold' }}>
              ₩{reservation.product.price.toLocaleString()}
            </span>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ReservationItem;
