import { ChevronRightIcon } from '@chakra-ui/icons';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';

const Filter = () => {
  return (
    <Box mt='50px' mb='20px' pl='15px' height='150px'>
      <Flex height='60%' borderBottom='1px' borderBottomColor='#868686'>
        <Text margin='0px 30px' display='flex' alignItems='center' fontSize='xl'>
          가격
        </Text>
        <RangeSlider width='400px' height='50%' aria-label={['min', 'max']} defaultValue={[10, 30]}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={5} index={0}>
            <Box color='#222' as={ChevronLeftIcon} />
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={5} index={1}>
            <Box color='#222' as={ChevronRightIcon} />
          </RangeSliderThumb>
        </RangeSlider>
      </Flex>
      <Flex height='40%' borderBottom='1px' borderBottomColor='#868686'>
        <Text margin='0px 30px' display='flex' alignItems='center' fontSize='xl'>
          지역
        </Text>
        <Checkbox mr='20px' size='lg' colorScheme='orange' defaultChecked>
          서울
        </Checkbox>
        <Checkbox mr='20px' size='lg' colorScheme='orange' defaultChecked>
          서울
        </Checkbox>
        <Checkbox mr='20px' size='lg' colorScheme='orange' defaultChecked>
          서울
        </Checkbox>
        <Checkbox mr='20px' size='lg' colorScheme='orange' defaultChecked>
          서울
        </Checkbox>
        <Checkbox mr='20px' size='lg' colorScheme='orange' defaultChecked>
          서울
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default Filter;
