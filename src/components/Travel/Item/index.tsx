import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  CardBody,
  CardFooter,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import { TravelItemModal } from './Modal';
import { ReservationButton } from './ReservationButton';

export const TravelItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idx, name, mainImage, price, spaceCategory } = props;

  return (
    <>
      <Card maxW='sm'>
        <CardBody onClick={onOpen} cursor='pointer'>
          <Image src={mainImage} alt={name} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text color='blue.600' fontSize='2xl'>
              {price}원
            </Text>
          </Stack>
        </CardBody>
        <CardFooter pt='0' justifyContent='space-between'>
          <Flex>
            <Box p='2' bg='blue.200' borderRadius='base'>
              {idx}
            </Box>
            <Box p='2' bg='gray.200' borderRadius='base'>
              {spaceCategory}
            </Box>
          </Flex>
          <Box>
            <ReservationButton itemData={props} />
          </Box>
        </CardFooter>
      </Card>
      <TravelItemModal open={isOpen} close={onClose} itemData={props} />
    </>
  );
};
