import { Image, Heading, Text, Button, Tr, Td, Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { DeleteDialog } from '@/components/common/DeleteDialog';
import { QuantityButton } from '@/components/common/QuantityButton';
import { useReservationDispatch } from '@/providers/Reservation/ReservationProvider';
import { TravelItemType } from '@/types/TravelItemType';

export const ReservationItem = (props: TravelItemType) => {
  const { idx, name, mainImage, description, price, maximumPurchases, quantity } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const reservationDispatch = useReservationDispatch();
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const removeItem = () => {
    reservationDispatch({ type: 'remove', payload: idx });
    onClose();
  };

  const plusQuantity = () => {
    if (currentQuantity >= maximumPurchases) return;
    setCurrentQuantity((prev) => prev + 1);
    reservationDispatch({ type: 'plus', payload: idx });
  };

  const minusQuantity = () => {
    if (currentQuantity === 1) return;
    setCurrentQuantity((prev) => prev - 1);
    reservationDispatch({ type: 'minus', payload: idx });
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
          <QuantityButton
            quantity={currentQuantity}
            onPlus={plusQuantity}
            onMinus={minusQuantity}
          />
          <Text fontSize='sm' color='blue.700' mt='3'>
            최대 구매 가능 수량: {maximumPurchases}
          </Text>
        </Td>
        <Td>₩{price.toLocaleString()}</Td>
        <Td fontWeight='bold'>₩{(quantity * price).toLocaleString()}</Td>
      </Tr>
      <DeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        title={'정말 장바구니에서 삭제하시겠습니까?'}
        bodyText={`삭제되는 아이템: ${name}`}
        onDelete={removeItem}
      />
    </>
  );
};
