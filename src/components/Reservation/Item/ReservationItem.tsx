import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Heading,
  Text,
  Button,
  Tr,
  Td,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import { QuantityButton } from '@/components/common/QuantityButton';
import { useReservationDispatch } from '@/providers/Reservation/ReservationProvider';

export const ReservationItem = (props) => {
  const { idx, name, mainImage, description, price } = props;
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const reservationDispatch = useReservationDispatch();

  const removeItem = () => {
    reservationDispatch({ type: 'remove', payload: idx });
    onClose();
  };

  return (
    <>
      <Tr>
        <Td>
          <Flex>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '100px' }}
              src={mainImage}
              alt={name}
              mr='5'
            />
            <Flex flexDirection='column' justifyContent='space-between'>
              <Heading size='md'>{name}</Heading>
              <Text py='2'>{description}</Text>
              <Flex>
                <Button variant='link' size='xs' onClick={onOpen}>
                  Remove
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Td>
        <Td>
          <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        </Td>
        <Td>₩{price.toLocaleString()}</Td>
        <Td fontWeight='bold'>₩{(quantity * price).toLocaleString()}</Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>정말 장바구니에서 삭제하시겠습니까?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>삭제되는 아이템: {name}</ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant='ghost' onClick={removeItem}>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
