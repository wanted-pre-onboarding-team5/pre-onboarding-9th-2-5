import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Button,
} from '@chakra-ui/react';

// idx, name, mainImage, price, spaceCategory;
import { mockDataType } from '@/types/type';

export const MockItem = ({ mockdata }: { mockdata: mockDataType }) => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' m={5}>
      <CardHeader>{mockdata.idx}</CardHeader>
      <Image
        objectFit='contain'
        maxW={{ base: '100%', sm: '200px' }}
        src={mockdata.mainImage}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='lg'>{mockdata.name}</Heading>

          <Text py='2'>{mockdata.price.toLocaleString()}원</Text>
          <Text py='2'>{mockdata.spaceCategory}</Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            상세 보기
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
