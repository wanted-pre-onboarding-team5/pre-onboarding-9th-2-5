import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
  Box,
} from '@chakra-ui/react';

import { RESERVATIONS_KEY } from '@/constants/storage';
import { getLocalStorageItem, setLocalStorageItem } from '@/utils/localStorage';

export const ModalDiv = ({ product }: Product) => {
  const {
    idx,
    name,
    mainImage,
    description,
    price,
    spaceCategory,
    maximumPurchases,
    registrationDate,
  } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleReservation = () => {
    const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];
    const filteredReservations = reservations.filter((reservation) => reservation.idx !== idx);
    setLocalStorageItem(RESERVATIONS_KEY, [...filteredReservations, product]);
  };

  return (
    <>
      <Box display='flex' alignItems='center' justifyContent='center' h='60px'>
        <Button onClick={onOpen}>상세정보</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{idx}</p>
            <p>{description}</p>
            <Image src={mainImage} alt={description} />
            <p>가격: {price}</p>
            <p>지역: {spaceCategory}</p>
            <p>최대구매가능수량: {maximumPurchases}</p>
            <p>예약가능일자: {registrationDate}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleReservation}>
              예약
            </Button>
            <Button variant='ghost' onClick={onClose}>
              취소
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
