import {
  Image,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
} from '@chakra-ui/react';

import { getLocalStorageItem, setLocalStorageItem } from '@/utils';

import { RESERVATIONS_KEY } from '@/constants/storage';

export const TravelItemModal = ({ open, close, itemData }) => {
  const {
    idx,
    name,
    mainImage,
    price,
    spaceCategory,
    description,
    maximumPurchases,
    registrationDate,
  } = itemData;

  const handleReservationClick = () => {
    const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];
    const filteredReservations = reservations.filter((reservation) => reservation.idx !== idx);
    // 로직을 다시 차근차근 세운 후 토스트 알람을 만들기
    if (filteredReservations.length < reservations) {
      console.log('장바구니에 이미 담겨있는 상품이에요!');
    } else {
      console.log('상품이 장바구니에 잘 담겼어요!');
    }
    setLocalStorageItem(RESERVATIONS_KEY, [...filteredReservations, itemData]);
  };

  return (
    <>
      <Modal isOpen={open} onClose={close} isCentered motionPreset='slideInBottom' size='md'>
        <ModalOverlay />
        <ModalContent p='5' alignItems='center'>
          <ModalHeader fontSize='2xl'>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent='center' alignItems='center'>
            <Image src={mainImage} alt={name} borderRadius='lg' margin='auto' />
            <Text fontSize='lg' m='5'>
              {description}
            </Text>
            <Text color='blue.600' fontSize='2xl' textAlign='center'>
              {price}원
            </Text>
            <Text fontSize='sm'>최대 구매 수량: {maximumPurchases}</Text>
            <Text fontSize='sm'>등록 날짜: {registrationDate}</Text>
            <Flex>
              <Box p='2' bg='gray.200' borderRadius='base'>
                {spaceCategory}
              </Box>
              <Box p='2' bg='blue.200' borderRadius='base'>
                {idx}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleReservationClick}>
              예약하기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
