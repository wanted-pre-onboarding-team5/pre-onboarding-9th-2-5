import { StarIcon } from '@chakra-ui/icons';
import { Image, Heading, Text, Flex, HStack, Box, Spacer, useDisclosure } from '@chakra-ui/react';

import { MockItemType } from '@/types';

import ListItemModal from './list-item-modal';

type Props = {
  itemData: MockItemType;
};

function ListItem({ itemData }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Image
          src={itemData.mainImage}
          css={`
            border-radius: 8px;
            width: 150px;
            height: 100px;
          `}
        />
        <Flex
          css={`
            flex-direction: column;
            flex-grow: 1;
          `}
        >
          <Text fontSize='xs' color='rgb(30 58 138)' fontWeight={600}>
            {itemData.description}
          </Text>
          <Heading size='sm' my='4px' flexGrow='1'>
            {itemData.name}
          </Heading>
          <Flex>
            <HStack fontSize='xs'>
              <StarIcon /> <span>{itemData.spaceCategory}</span>
            </HStack>
            <Spacer />
            <span style={{ fontWeight: 'bold' }}>₩{itemData.price.toLocaleString()}</span>
          </Flex>
        </Flex>
      </Flex>
      <ListItemModal isOpen={isOpen} onClose={onClose} itemData={itemData} />
    </Box>
  );
}

export default ListItem;
