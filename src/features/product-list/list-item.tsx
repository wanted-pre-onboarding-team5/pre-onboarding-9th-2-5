import { CalendarIcon, StarIcon } from '@chakra-ui/icons';
import {
  Image,
  Heading,
  Text,
  Flex,
  HStack,
  Box,
  IconButton,
  Spacer,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

import reservationService from '../reservation/reservation-service';

import ListItemModal from './list-item-modal';

export type MockItemType = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
};

type Props = {
  itemData: MockItemType;
};

function ListItem({ itemData }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  return (
    <Box width={'100%'} position='relative'>
      <Flex
        onClick={onOpen}
        css={`
          border: 1px solid #efefef;
          border-radius: 8px;
          width: 100%;
          padding: 16px;
          gap: 16px;
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <Image src={itemData.mainImage} borderRadius='8px' width={150} height={100} />
        <Flex flexDirection='column' flexGrow='1'>
          <Text fontSize='xs' color='rgb(30 58 138)' fontWeight={600}>
            {itemData.description}
          </Text>
          <Heading size='sm' my='4px' flexGrow='1'>
            {itemData.name}
          </Heading>
          <Flex>
            <HStack style={{ fontSize: '0.8rem' }}>
              <StarIcon /> <span>{itemData.spaceCategory}</span>
            </HStack>
            <Spacer />
            <span style={{ fontWeight: 'bold' }}>
              ₩{itemData.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </Flex>
        </Flex>
      </Flex>
      <IconButton
        css={`
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: rgb(224 242 254);
          color: rgb(59 130 246);
          &:active {
            background-color: rgb(191 219 254);
          }
        `}
        size='sm'
        variant={'unstyled'}
        aria-label='reservation-icon'
        icon={<CalendarIcon />}
        onClick={() => {
          const { message } = reservationService.reserveItem(itemData);
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
      />
      <ListItemModal isOpen={isOpen} onClose={onClose} itemData={itemData} />
    </Box>
  );
}

export default ListItem;
