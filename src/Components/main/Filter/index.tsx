import { Select, Flex, Box } from '@chakra-ui/react';

export const Filter = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box>
        <p>필터</p>
        <Flex>
          <Select w={180} placeholder='가격'>
            <option value='option1'>~ 10,000</option>
            <option value='option2'>10,000 ~ 20,000</option>
            <option value='option3'>20,000 ~</option>
          </Select>
          <Select w={180} placeholder='지역'>
            <option value='option1'>강원</option>
            <option value='option2'>서울</option>
            <option value='option3'>부산</option>
            <option value='option3'>대구</option>
            <option value='option3'>제주</option>
          </Select>
        </Flex>
      </Box>
    </Box>
  );
};
