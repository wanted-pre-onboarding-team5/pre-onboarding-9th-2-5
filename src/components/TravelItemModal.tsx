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

export const TravelItemModal = (props) => {
  const {
    idx,
    name,
    mainImage,
    price,
    spaceCategory,
    description,
    maximumPurchases,
    registrationDate,
    open,
    close,
  } = props;
  const handleReservationClick = () => {};

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
