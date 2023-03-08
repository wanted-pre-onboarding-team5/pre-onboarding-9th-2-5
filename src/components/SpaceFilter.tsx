import { CheckboxGroup, Stack, Checkbox, Text } from '@chakra-ui/react';

import { SPACE_LIST } from '@/constants';

interface SpaceFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SpaceFilter = ({ onChange }: SpaceFilterProps) => {
  return (
    <CheckboxGroup colorScheme='blue'>
      <Stack spacing={[1, 6]} direction={['column', 'row']} py='20px'>
        <Text fontSize='lg' fontWeight='bold'>
          지역
        </Text>
        {SPACE_LIST.map((space, i) => (
          <Checkbox key={i} value={space} onChange={onChange} fontWeight='semibold'>
            {space}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};
