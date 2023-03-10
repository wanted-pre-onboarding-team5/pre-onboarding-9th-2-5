import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  CardBody,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

import { TravelItemModal } from './Modal';

import { TravelItemType } from '@/types/TravelItemType';

export const TravelItem = (props: TravelItemType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { idx, name, mainImage, price, spaceCategory } = props;

  return (
    <>
      <Card maxW='sm'>
        <CardBody onClick={onOpen} cursor='pointer' p='2'>
          <Image src={mainImage} alt={name} borderRadius='md' />
          <Text pt='2' color='gray.500' fontSize='xs' borderRadius='base'>
            No. {idx}
          </Text>
          <Stack mt='2' spacing='2'>
            <Heading size='sm' fontWeight='bold' mb='3'>
              {name}
            </Heading>
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text color='blue.600' fontSize='lg' fontWeight='bold'>
              ₩{price.toLocaleString()}
            </Text>
            <Box p='1.5' bg='gray.200' borderRadius='xl'>
              {spaceCategory}
            </Box>
          </Flex>
        </CardBody>
      </Card>
      <TravelItemModal isOpen={isOpen} onClose={onClose} itemData={props} />
    </>
  );
};
