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

  const prices = [
    { value: '', label: '전체 가격대' },
    { value: '0,10000', label: '10,000원 미만' },
    { value: '10000,20000', label: '10,000원~20,000원' },
    { value: '30000,', label: '30,000원 이상' },
  ];

  const spaces = [
    { value: '강원', label: '강원' },
    { value: '서울', label: '서울' },
    { value: '부산', label: '부산' },
    { value: '대구', label: '대구' },
    { value: '제주', label: '제주' },
  ];

  return (
    <Flex mb={4} align='center'>
      <Box mr={4}>
        <Select value={selectedPrice} onChange={handlePriceChange}>
          {prices.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Box>
      <Stack spacing={5} direction='row'>
        <CheckboxGroup onChange={handleSpacesChange} value={selectedSpaces}>
          {spaces.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Stack>
    </Flex>
  );
};
