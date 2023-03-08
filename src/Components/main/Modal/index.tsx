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

import { Props } from '../product';

export const ModalDiv = ({ img, desc, idx, name, price, space, maxPurchase, date }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <p>{desc}</p>
            <Image src={img} alt={desc} />
            <p>가격: {price}</p>
            <p>지역: {space}</p>
            <p>최대구매가능수량: {maxPurchase}</p>
            <p>예약가능일자: {date}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
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
