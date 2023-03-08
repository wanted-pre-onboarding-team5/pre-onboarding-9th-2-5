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
} from '@chakra-ui/react';
import React from 'react';

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

  return (
    <Box width={'100%'} position='relative' onClick={onOpen}>
      <Flex
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
      />
      <ListItemModal isOpen={isOpen} onClose={onClose} itemData={itemData} />
    </Box>
  );
}

export default ListItem;
