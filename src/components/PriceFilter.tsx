import { Flex, Input, Text } from '@chakra-ui/react';

interface PriceFilterProps {
  inputValues: {
    min: string;
    max: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceFilter = ({ inputValues, onChange }: PriceFilterProps) => {
  return (
    <Flex alignItems='center' gap='3' pt='10'>
      <Text fontSize='lg' fontWeight='bold' paddingRight='10px'>
        금액
      </Text>
      <Input
        type='number'
        w='100px'
        h='32px'
        name='min'
        placeholder='최저 요금'
        value={inputValues.min}
        onChange={onChange}
      />
      <Text fontSize='2xl'>~</Text>
      <Input
        type='number'
        w='100px'
        h='32px'
        name='max'
        placeholder='최고 요금'
        value={inputValues.max}
        onChange={onChange}
      />
    </Flex>
  );
};
