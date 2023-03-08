import { Box, Spacer, Image } from '@chakra-ui/react';

import { ModalDiv } from '../Modal';

export const Product = ({ img, desc, key, name, price, space, maxPurchase, date }) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Box maxW='lg' borderWidth='1px' borderRadius='lg' m='5'>
        <Image src={img} alt={desc} />
        {key}
        <Box display='flex' alignItems='center' justifyContent='center' h='50px'>
          {name}
        </Box>
        <Box>
          <Box m='1'>{price}</Box>
          <Box m='1'>{space}</Box>
        </Box>
        <Spacer />
        <ModalDiv
          key={key}
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
