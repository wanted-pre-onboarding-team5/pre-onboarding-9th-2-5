import {
  Box,
  Card,
  Image,
  Heading,
  Button,
  Stack,
  Text,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { useState } from 'react';

export const ReservationItem = (props) => {
  const { name, mainImage, description, price } = props;
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={mainImage} alt={name} />

        <Stack>
          <CardBody>
            <Heading size='md'>{name}</Heading>
            <Text py='2'>{description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {price}원
            </Text>
          </CardBody>

          <CardFooter>
            <Box>{quantity}</Box>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </Button>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              -
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};
