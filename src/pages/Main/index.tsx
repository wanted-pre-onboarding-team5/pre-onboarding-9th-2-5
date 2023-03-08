import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MockItem } from '@/components/MockItem';
import { mockDataType } from '@/types/type';
export const Main = () => {
  const [mockDatas, setMockDatas] = useState<mockDataType[]>();
  const Mockdata = async () => {
    try {
      await fetch('../src/mocks/data.json')
        .then((res) => res.json())
        .then((data) => setMockDatas(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Mockdata();
  }, []);

  return (
    <Box p={4}>
      {mockDatas?.map((mockdata) => (
        <MockItem key={mockdata.idx} mockdata={mockdata} />
      ))}
    </Box>
  );
};
