import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Image,
  Text,
  Box,
} from '@chakra-ui/react';

import { mockDataType } from '@/types/type';

export const MockItemDetail = ({
  isOpen,
  onClose,
  mockdata,
}: {
  isOpen: boolean;
  onClose: () => void;
  mockdata: mockDataType;
}) => {
  const {
    idx,
    name,
    mainImage,
    spaceCategory,
    price,
    maximumPurchases,
    description,
    registrationDate,
  } = mockdata;

  const reservationClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!localStorage.getItem('reserv_item_info')) {
      localStorage.setItem('reserv_item_info', JSON.stringify([]));
    }
    const reserveItemArray: mockDataType[] = JSON.parse(
      localStorage.getItem('reserv_item_info') || '[]',
    );
    reserveItemArray.push(mockdata);

    const isDuplicate = new Set();
    const noDuplicateItem = reserveItemArray.filter((info) => {
      const key = `${info.idx}-${info.name}`;
      if (isDuplicate.has(key)) {
        return false;
      }
      isDuplicate.add(key);
      return true;
    });

    localStorage.setItem('reserv_item_info', JSON.stringify(noDuplicateItem));
  };
  return (
    <>
      <Modal isOpen={isOpen} size='2xl' onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display='flex' gap={5} justifyContent='center'>
            <Text fontSize='2xl'>{idx}</Text>
            <Text fontSize='2xl'>{name}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex p={2} justify='center' gap={4} flexDirection={{ base: 'column', sm: 'row' }}>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '300px' }}
                borderRadius='2xl'
                src={mainImage}
                alt={name}
              />
              <Flex direction='column' justify='center'>
                <Box>위치: {spaceCategory}</Box>
                <Box>가격: {price}</Box>
                <Box>최대구매수량: {maximumPurchases}</Box>
                <Text>설명: {description}</Text>
                <Text>등록일 : {registrationDate}</Text>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              bg='black'
              color='whiteAlpha.800'
              zIndex='10'
              border='1px'
              _hover={{
                background: 'white',
                color: 'black',
                transition: 'background-color 200ms linear',
                cursor: 'pointer',
              }}
              mr='2'
              onClick={reservationClickHandler}
            >
              예약하기
            </Button>
            <Button
              bg='black'
              color='whiteAlpha.800'
              zIndex='10'
              border='1px'
              _hover={{
                background: 'white',
                color: 'black',
                transition: 'background-color 200ms linear',
                cursor: 'pointer',
              }}
              onClick={onClose}
            >
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
