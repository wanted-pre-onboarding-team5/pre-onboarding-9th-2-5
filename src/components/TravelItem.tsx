import { Card, Image, Stack, Heading, Text, Box, CardBody, CardFooter } from '@chakra-ui/react';

export const TravelItem = ({ idx, name, mainImage, price, spaceCategory }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={mainImage} alt={name} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            {price}원
          </Text>
        </Stack>
      </CardBody>
      <CardFooter pt='0'>
        <Box p='2' bg='gray.200' borderRadius='base'>
          {spaceCategory}
        </Box>
      </CardFooter>
    </Card>
  );
};
