import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  Flex,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { MockItemDetail } from '@/components/MockItemDetail';
import { mockDataType } from '@/types/type';

export const MockItem = ({ mockdata }: { mockdata: mockDataType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idx, mainImage, name, price, spaceCategory } = mockdata;
  const reservationClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
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
          <CardFooter>
            <Button
              bg='black'
              color='whiteAlpha.800'
              zIndex='10'
              border='1px'
              _hover={{
                background: 'white',
                color: 'black',
                transition: 'background-color 200ms linear',
                cursor: 'pointer',
              }}
              onClick={reservationClickHandler}
            >
              예약하기
            </Button>
          </CardFooter>
        </Stack>

        <MockItemDetail mockdata={mockdata} isOpen={isOpen} onClose={() => onClose()} />
      </Card>
    </>
  );
};
