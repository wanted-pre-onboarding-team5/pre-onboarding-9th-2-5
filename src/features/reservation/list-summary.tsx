import { Box, HStack, Spacer, Button, Flex } from '@chakra-ui/react';
import React from 'react';

import { MockItemType } from '../product-list/list-item';

type Props = {
  reservedListState: MockItemType[];
};

function ListSummary({ reservedListState }: Props) {
  return (
    <Flex
      css={`
        flex-direction: column;
        border: 1px solid #dedede;
        border-radius: 4px;
        padding: 16px;
        gap: 16px;
      `}
    >
      <Box>
        {reservedListState.map((item) => (
          <HStack
            key={item.idx}
            css={`
              font-size: 0.9rem;
              color: rgb(71 85 105);
              margin-bottom: 4px;
            `}
          >
            <span>{item.name}</span>
            <span>
              ({item.price} X {item.maximumPurchases}개)
            </span>
            <Spacer />
            <span style={{ fontWeight: 'bold' }}>
              ₩ {(+item.maximumPurchases * +item.price).toLocaleString()}
            </span>
          </HStack>
        ))}
      </Box>
      <Box border={'1px solid #efefef'} />
      <HStack
        css={`
          font-weight: bold;
          font-size: 1.2rem;
        `}
      >
        <span>총 예상 금액</span>
        <Spacer />
        <span>
          ₩
          {reservedListState
            .reduce((a, c) => a + +c.price * +c.maximumPurchases, 0)
            .toLocaleString()}{' '}
        </span>
      </HStack>
      <Button colorScheme={'blue'}>결제하기</Button>
    </Flex>
  );
}

export default ListSummary;