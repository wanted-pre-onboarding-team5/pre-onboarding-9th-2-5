import { StarIcon, WarningIcon, CalendarIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Heading,
  ModalBody,
  Button,
  Image,
  ModalCloseButton,
  Flex,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

import { MockItemType } from './list-item';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  itemData: MockItemType;
};

function ListItemModal({ isOpen, onClose, itemData }: Props) {
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
            <HStack style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'rgb(51 65 85)' }}>
              <WarningIcon />
              <span>구매 한계 수량 :</span>
              <span>{itemData.maximumPurchases}</span>
            </HStack>
          </Flex>
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
          >
            장바구니 담기
          </Button>
        </HStack>
      </ModalContent>
    </Modal>
  );
}

export default ListItemModal;
