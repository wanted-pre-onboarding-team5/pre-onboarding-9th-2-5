import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Tag,
  HStack,
} from '@chakra-ui/react';

interface ProductItemProps {
  product: Product;
  onOpen: () => void;
  onReservationClick: () => void;
}

export const ProductItem = ({ product, onOpen, onReservationClick }: ProductItemProps) => {
  const { idx, name, mainImage, spaceCategory, price } = product;
  return (
    <Card maxW='sm'>
      <CardBody onClick={onOpen}>
        <Text as='i' fontSize='xl'>
          {idx}
        </Text>
        <Image
          src={mainImage}
          boxSize='350px'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <HStack spacing={4}>
            <Tag size={'md'} key={'md'} variant='solid' colorScheme='teal'>
              {spaceCategory}
            </Tag>
          </HStack>
          <Text color='blue.600' fontSize='2xl'>
            {`₩ ${price.toLocaleString()}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button width='350px' variant='solid' colorScheme='blue' onClick={onReservationClick}>
          예약
        </Button>
      </CardFooter>
    </Card>
  );
};
