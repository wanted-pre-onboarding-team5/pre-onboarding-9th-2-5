import { Select, Flex, Box } from '@chakra-ui/react';
import { useState } from 'react';

export const Filter = () => {
  const [priceFilter, setPriceFilter] = useState();
  const [spaceFilter, setSpaceFilter] = useState();
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box>
        <p>필터</p>
        {priceFilter}
        {spaceFilter}
        <Flex>
          <Select
            w={180}
            placeholder='가격'
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value='less10000'>~ 10,000</option>
            <option value='10000and20000'>10,000 ~ 20,000</option>
            <option value='over20000'>20,000 ~</option>
          </Select>
          <Select
            w={180}
            placeholder='지역'
            value={spaceFilter}
            onChange={(e) => setSpaceFilter(e.target.value)}
          >
            <option value='gangwon'>강원</option>
            <option value='seoul'>서울</option>
            <option value='busan'>부산</option>
            <option value='daegu'>대구</option>
            <option value='jeju'>제주</option>
          </Select>
        </Flex>
      </Box>
    </Box>
  );
};
