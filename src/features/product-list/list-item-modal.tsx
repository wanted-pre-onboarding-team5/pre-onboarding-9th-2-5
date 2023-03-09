import { StarIcon, WarningIcon, CalendarIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
  ButtonGroup,
  Button,
  IconButton,
  Image,
  Flex,
  HStack,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

import reservationService from '../reservation/reservation-service';

import { MockItemType } from './list-item';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  itemData: MockItemType;
};

function ListItemModal({ isOpen, onClose, itemData }: Props) {
  const toast = useToast();
  const [amount, setAmount] = React.useState(1);
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={'16px'}>
        <ModalCloseButton />
        <Heading size={'md'}> {itemData.name}</Heading>
        <Flex my='8px'>
          <HStack
            style={{
              fontSize: '0.8rem',
              marginRight: '16px',
              fontWeight: 'bold',
              color: 'rgb(51 65 85)',
            }}
          >
            <StarIcon /> <span>{itemData.spaceCategory}</span>
          </HStack>
          <HStack style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'rgb(51 65 85)' }}>
            <CalendarIcon /> <span>{itemData.registrationDate}</span>
          </HStack>
        </Flex>
        <Image
          src={itemData.mainImage}
          height={250}
          objectFit='cover'
          borderRadius={'8px'}
          my='8px'
        />
        <ModalBody minHeight={'150px'}>{itemData.description}</ModalBody>
        <HStack gap={'16px'}>
          <Flex flexDirection={'column'}>
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              ₩{itemData.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            <HStack style={{ fontSize: '0.65rem', fontWeight: 'bold', color: 'rgb(51 65 85)' }}>
              <WarningIcon />
              <span>구매 한계 수량 : {itemData.maximumPurchases}개</span>
            </HStack>
          </Flex>
          <ButtonGroup isAttached size={'md'} variant='outline'>
            <IconButton
              aria-label='minus-button'
              icon={<MinusIcon />}
              onClick={() => setAmount((prev) => prev - 1)}
              isDisabled={amount === 1}
            />
            <Button
              css={`
                cursor: default;
                pointer-events: none;
              `}
            >
              {amount}
            </Button>
            <IconButton
              aria-label='plus-button'
              icon={<AddIcon />}
              isDisabled={amount === itemData.maximumPurchases}
              onClick={() => setAmount((prev) => prev + 1)}
            />
          </ButtonGroup>
          <Button
            variant={'unstyled'}
            css={`
              flex-grow: 1;
              background-color: rgb(224 242 254);
              color: rgb(59 130 246);
              &:active {
                background-color: rgb(191 219 254);
              }
            `}
            onClick={() => {
              const { message } = reservationService.reserveItem(itemData, amount);
              if (message === 'SUCCESS') {
                toast({
                  title: '장바구니 담기 완료',
                  status: 'success',
                  duration: 1000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: '이미 있는 상품입니다',
                  status: 'error',
                  duration: 1000,
                  isClosable: true,
                });
              }
            }}
          >
            장바구니 담기
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
}

export default ListItemModal;
