import { Box, Checkbox, CheckboxGroup, Flex, Select, Stack } from '@chakra-ui/react';
import { useState } from 'react';

interface FilterProps {
  onFilter: (filters: { price?: string; spaceCategory?: string[] }) => void;
}

export const Filter = ({ onFilter }: FilterProps) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
    onFilter({ price: e.target.value, spaceCategory: selectedSpaces });
  };

  const handleSpacesChange = (spaces: string[]) => {
    setSelectedSpaces(spaces);
    onFilter({ price: selectedPrice, spaceCategory: spaces });
  };

  return (
    <Flex mb={4} align='center'>
      <Box mr={4}>
        <Select value={selectedPrice} onChange={handlePriceChange}>
          <option value=''>전체 가격대</option>
          <option value='0,10000'>10,000원 미만</option>
          <option value='10000,20000'>10,000원~20,000원</option>
          <option value='30000,'>30,000원 이상</option>
        </Select>
      </Box>
      <Stack spacing={5} direction='row'>
        <CheckboxGroup onChange={handleSpacesChange} value={selectedSpaces}>
          <Checkbox value='강원'>강원</Checkbox>
          <Checkbox value='서울'>서울</Checkbox>
          <Checkbox value='부산'>부산</Checkbox>
          <Checkbox value='대구'>대구</Checkbox>
          <Checkbox value='제주'>제주</Checkbox>
        </CheckboxGroup>
      </Stack>
    </Flex>
  );
};
