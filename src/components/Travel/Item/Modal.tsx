import {
  Image,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';

import { ReservationButton } from './ReservationButton';

import { QuantityButton } from '@/components/common/QuantityButton';
import { TravelItemType } from '@/types/TravelItemType';
interface TravelItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemData: TravelItemType;
}

export const TravelItemModal = ({ isOpen, onClose, itemData }: TravelItemModalProps) => {
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
  const [itemQuantity, setItemQuantity] = useState(1);

  const plusItemQuantity = () => {
    if (itemQuantity >= maximumPurchases) return;
    setItemQuantity((prev) => prev + 1);
  };

  const minusItemQuantity = () => {
    if (itemQuantity === 1) return;
    setItemQuantity((prev) => prev - 1);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' size='md'>
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
              ₩{price.toLocaleString()}
            </Text>
            <Flex pt='3' flexDirection='column' justifyContent='center' alignItems='center'>
              <Text fontSize='sm' mb='2'>
                최대 예약 가능 수량: {maximumPurchases}
              </Text>
              <Flex justifyContent='space-between' alignItems='center' width='100%'>
                <QuantityButton
                  quantity={itemQuantity}
                  onPlus={plusItemQuantity}
                  onMinus={minusItemQuantity}
                />
                <ReservationButton itemData={itemData} quantity={itemQuantity} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
