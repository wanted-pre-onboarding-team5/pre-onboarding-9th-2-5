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
} from '@chakra-ui/react';
import React from 'react';

import { MockItemType } from '../product-list/list-item';

type Props = {
  itemData: MockItemType;
};

function ListItem({ itemData }: Props) {
  return (
    <Flex
      css={`
        padding: 16px;
        gap: 16px;
        border: 1px solid #dedede;
        borderradius: 4px;
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
            <IconButton aria-label='minus-button' icon={<MinusIcon />} />
            <Button
              css={`
                cursor: default;
                pointer-events: none;
              `}
            >
              {1}
            </Button>
            <IconButton aria-label='plus-button' icon={<AddIcon />} />
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
      />
    </Flex>
  );
}

export default ListItem;
