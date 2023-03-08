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
// spaceCategory, price, maximumPurchases, registrationDate
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
            <Button colorScheme='blackAlpha' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
