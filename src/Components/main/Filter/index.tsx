import { Select, Flex, Box, Text } from '@chakra-ui/react';

export const priceValues = ['less10000', '10000and20000', 'over20000'];
const priceRanges = ['~ 10,000', '10,000 ~ 20,000', '20,000 ~'];
export const spaceValues = ['강원', '서울', '부산', '대구', '제주'];

export type Props = {
  priceSelect: string;
  setPriceSelect: React.Dispatch<React.SetStateAction<string>>;
  spaceSelect: string;
  setSpaceSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const Filter = ({ priceSelect, setPriceSelect, spaceSelect, setSpaceSelect }: Props) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box>
        <Text align='center'>필터</Text>
        <Flex>
          <Select
            w={180}
            placeholder='가격'
            value={priceSelect}
            onChange={(e) => setPriceSelect(e.target.value)}
          >
            {priceValues.map((priceValue, i) => (
              <option key={i} value={priceValue}>
                {priceRanges[i]}
              </option>
            ))}
          </Select>
          <Select
            w={180}
            placeholder='지역'
            value={spaceSelect}
            onChange={(e) => setSpaceSelect(e.target.value)}
          >
            {spaceValues.map((spaceValue, i) => (
              <option key={i} value={spaceValue}>
                {spaceValue}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
    </Box>
  );
};
