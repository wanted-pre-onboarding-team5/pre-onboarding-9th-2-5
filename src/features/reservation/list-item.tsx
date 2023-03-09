import { MinusIcon, AddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Image,
  Heading,
  Flex,
  Text,
  ButtonGroup,
  IconButton,
  Button,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { ReservationItemType } from '@/types';

import ListItemDeleteDialog from './list-item-delete-dialog';
import reservationService from './reservation-service';

type Props = {
  itemData: ReservationItemType;
  refetch: () => void;
};

function ListItem({ itemData, refetch }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateAmount = (newAmount: number) => {
    const newData = { ...itemData, reservedAmount: newAmount };
    reservationService.updateItem(newData);
    refetch();
  };

  const deleteItem = (itemIdx: number) => {
    reservationService.deleteItem(itemIdx);
    refetch();
  };

  return (
    <Flex
      css={`
        padding: 16px;
        gap: 16px;
        border: 1px solid #dedede;
        border-radius: 4px;
        position: relative;
      `}
    >
      <Image src={itemData.mainImage} borderRadius='8px' width={100} height={100} />
      <Flex flexDirection='column' flexGrow={'1'}>
        <Heading size='sm' my='4px'>
          {itemData.name}
        </Heading>
        <Text fontSize='xs' color='gray' fontWeight={600} flexGrow='1'>
          {itemData.description}
        </Text>
        <Flex>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            ₩{itemData.price.toLocaleString()}
          </span>
          <Spacer />

          <ButtonGroup isAttached size={'sm'} variant='outline'>
            <IconButton
              aria-label='minus-button'
              icon={<MinusIcon />}
              isDisabled={itemData.reservedAmount === 1}
              onClick={() => updateAmount(itemData.reservedAmount - 1)}
            />
            <Button
              css={`
                cursor: default;
                pointer-events: none;
              `}
            >
              {itemData.reservedAmount}
            </Button>
            <IconButton
              aria-label='plus-button'
              icon={<AddIcon />}
              isDisabled={itemData.reservedAmount === itemData.maximumPurchases}
              onClick={() => updateAmount(itemData.reservedAmount + 1)}
            />
          </ButtonGroup>
        </Flex>
      </Flex>

      <IconButton
        css={`
          position: absolute;
          top: 8px;
          right: 8px;
        `}
        aria-label='delete-button'
        variant='unstyled'
        icon={<SmallCloseIcon />}
        onClick={onOpen}
      />
      <ListItemDeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        deleteAction={() => deleteItem(itemData.idx)}
      />
    </Flex>
  );
}

export default ListItem;
