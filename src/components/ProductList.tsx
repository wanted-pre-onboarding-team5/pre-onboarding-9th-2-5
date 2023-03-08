import { Center, Wrap, WrapItem } from '@chakra-ui/react';

import { ProductCard } from './ProductCard';

export const ProductList = ({ products }: { products?: Product[] | null }) => {
  return (
    <Wrap spacing='72px' pb='20px'>
      {products?.map((product) => (
        <WrapItem key={product.idx}>
          <Center>
            <ProductCard {...product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};
