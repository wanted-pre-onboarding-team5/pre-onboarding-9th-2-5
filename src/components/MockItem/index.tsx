import { Card, CardHeader, CardBody, Text, Image, Stack, Heading, Flex } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { MockItemDetail } from '@/components/MockItemDetail';
import { mockDataType } from '@/types/type';

export const MockItem = ({ mockdata }: { mockdata: mockDataType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idx, mainImage, name, price, spaceCategory } = mockdata;

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='elevated'
        m={5}
        borderRadius='2xl'
        _hover={{
          background: 'black',
          color: 'white',
          transition: 'background-color 200ms linear',
          cursor: 'pointer',
        }}
        onClick={onOpen}
      >
        <CardHeader>{idx}</CardHeader>
        <Flex p={2} justify='center'>
          <Image
            objectFit='contain'
            maxW={{ base: '100%', sm: '200px' }}
            borderRadius='3xl'
            src={mainImage}
            alt={name}
          />
        </Flex>
        <Stack>
          <CardBody>
            <Heading size='lg'>{name}</Heading>
            <Text py='2'>{price.toLocaleString()}원</Text>
            <Text py='2'>{spaceCategory}</Text>
          </CardBody>
        </Stack>

        <MockItemDetail mockdata={mockdata} isOpen={isOpen} onClose={() => onClose()} />
      </Card>
    </>
  );
};
