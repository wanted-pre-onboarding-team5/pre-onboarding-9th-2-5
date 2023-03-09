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
            <Flex justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' color='gray.500' fontSize='xs' borderRadius='base'>
                  No. {idx}
                </Text>
                <Text fontSize='xs' color='gray.500'>
                  등록 날짜: {registrationDate}
                </Text>
              </Box>
              <Box p='1.5' bg='gray.200' borderRadius='xl'>
                {spaceCategory}
              </Box>
            </Flex>
            <Text fontSize='md' m='5'>
              {description}
            </Text>
            <Text color='blue.600' fontSize='lg' textAlign='center' fontWeight='bold'>
              ₩{price}
            </Text>

            <Flex pt='3' flexDirection='column' justifyContent='center' alignItems='center'>
              <Text fontSize='sm' mb='2'>
                최대 예약 가능 수량: {maximumPurchases}
              </Text>
              <ReservationButton itemData={itemData} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
