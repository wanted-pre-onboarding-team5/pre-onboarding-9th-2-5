import { Select, Flex, Box, Text } from '@chakra-ui/react';

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
            <option value='less10000'>~ 10,000</option>
            <option value='10000and20000'>10,000 ~ 20,000</option>
            <option value='over20000'>20,000 ~</option>
          </Select>
          <Select
            w={180}
            placeholder='지역'
            value={spaceSelect}
            onChange={(e) => setSpaceSelect(e.target.value)}
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
