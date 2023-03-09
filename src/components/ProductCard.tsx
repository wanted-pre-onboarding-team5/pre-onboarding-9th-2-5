import { Card, CardBody, Image, Stack, Text, Heading, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { ProductModal } from './ProductModal';

export const ProductCard = (props: Product) => {
  const { idx, name, mainImage, description, price, spaceCategory } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
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
          </Stack>
        </CardBody>
      </Card>
      {isOpen && <ProductModal isOpen={isOpen} onClose={handleModal} product={props} />}
    </>
  );
};
