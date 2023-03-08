import { Container, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MockItem } from '@/components/MockItem';
import { SelectPrice } from '@/components/SelectPrice';
import { mockDataType } from '@/types/type';

export const Main = () => {
  const [mockDatas, setMockDatas] = useState<null | mockDataType[]>();
  const [price, setPrice] = useState<number | null>();
  const Mockdata = async () => {
    try {
      await fetch('../src/mocks/data.json')
        .then((res) => res.json())
        .then((data) => setMockDatas(data));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredPrice = () => {
    if (price === 1) {
      setMockDatas(mockDatas?.filter((mockdata) => mockdata.price < 10000));
    } else if (price === 2) {
      setMockDatas(
        mockDatas?.filter((mockdata) => mockdata.price > 10000 && mockdata.price < 20000),
      );
    } else {
      setMockDatas(mockDatas?.filter((mockdata) => mockdata.price > 20000));
    }
  };

  useEffect(() => {
    filteredPrice();
  }, [price]);

  useEffect(() => {
    Mockdata();
  }, []);

  return (
    <Container p={4} maxW='3xl'>
      <Flex marginLeft='5' gap='6'>
        <SelectPrice setPrice={setPrice} />
        {/* <SelectPrice /> */}
      </Flex>
      {mockDatas?.map((mockdata) => (
        <MockItem key={mockdata.idx} mockdata={mockdata} />
      ))}
    </Container>
  );
};
