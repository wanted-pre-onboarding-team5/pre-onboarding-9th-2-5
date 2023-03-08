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
} from '@chakra-ui/react';

export const ModalDiv = ({ img, desc, key, name, price, space, maxPurchase, date }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>상세정보</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{key}</p>
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
