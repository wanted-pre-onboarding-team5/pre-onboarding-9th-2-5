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
  Flex,
} from '@chakra-ui/react';

import { ReservationButton } from './ReservationButton';

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
            <ReservationButton itemData={itemData} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
