import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import { RESERVE_LIST_KEY } from '@/constants';

import { ProductModal } from './ProductModal';

export const ProductCard = (props: Product) => {
  const { idx, name, mainImage, description, price, spaceCategory } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toast = useToast();

  const handleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleReserve = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const reserveList = localStorage.getItem(RESERVE_LIST_KEY)?.split(' ') || [];
    if (reserveList.includes(idx + '')) {
      toast({
        title: '이미 예약하신 상품입니다.',
        status: 'error',
        duration: 2000,
      });
      return;
    }
    toast({
      title: '예약이 완료되었습니다.',
      status: 'info',
      duration: 2000,
    });
    localStorage.setItem(RESERVE_LIST_KEY, `${reserveList.join(' ')} ${idx}`);
  };

  return (
    <>
      <Card onClick={handleModal} shadow='xl' border='1px' borderColor='gray.100'>
        <CardBody w='350px'>
          <Stack mx='auto' spacing='2'>
            <Image src={mainImage} alt='' borderRadius='lg' display='block' h='300px' />
            <Text color='gray.700' fontSize='small'>
              {`No.${idx}`}
            </Text>
            <Heading size='md' fontSize='19px'>
              {name}
            </Heading>
            <Text h='50px'>{description}</Text>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text color='blue.600' fontSize='2xl'>
                {`₩${price.toLocaleString()}`}
              </Text>
              <Text color='gray.600' fontWeight='bold' fontSize='lg'>
                {spaceCategory}
              </Text>
            </Flex>
            <Button colorScheme='blue' onClick={handleReserve}>
              예약
            </Button>
          </Stack>
        </CardBody>
      </Card>
      {isOpen && <ProductModal isOpen={isOpen} onClose={handleModal} product={props} />}
    </>
  );
};
