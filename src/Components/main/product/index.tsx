import { Box, Spacer, Image, Text } from '@chakra-ui/react';

import { ModalDiv } from '../Modal';

export type Props = {
  img: string;
  desc: string;
  idx: number;
  name: string;
  price: number;
  space: string;
  maxPurchase: number;
  date: string;
};
export const Product = (props: Product) => {
  const { name, mainImage, description, price, spaceCategory } = props;

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box maxW='lg' borderWidth='1px' borderRadius='lg' m='3'>
        <Image src={mainImage} alt={description} />
        <Box display='flex' alignItems='center' justifyContent='center' h='50px' fontSize='2sm'>
          {name}
        </Box>
        <Box>
          <Text m='1' align='center'>
            {price}
            <Spacer />
            {spaceCategory}
          </Text>
        </Box>
        <Spacer />
        <ModalDiv product={props} />
      </Box>
    </Box>
  );
};
