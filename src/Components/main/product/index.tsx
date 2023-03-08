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

export const Product = ({ img, desc, idx, name, price, space, maxPurchase, date }: Props) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box maxW='lg' borderWidth='1px' borderRadius='lg' m='3'>
        <Image src={img} alt={desc} />
        <Box display='flex' alignItems='center' justifyContent='center' h='50px' fontSize='2sm'>
          {name}
        </Box>
        <Box>
          <Text m='1' align='center'>
            {price}
            <Spacer />
            {space}
          </Text>
        </Box>
        <Spacer />
        <ModalDiv
          idx={idx}
          img={img}
          desc={desc}
          name={name}
          price={price}
          space={space}
          maxPurchase={maxPurchase}
          date={date}
        />
      </Box>
    </Box>
  );
};
