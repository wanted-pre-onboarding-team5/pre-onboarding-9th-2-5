import { Box, Grid } from '@chakra-ui/react';

import data from '../../mocks/data.json';
import { Product } from '../main/product';

import { getProducts } from '@/apis/mainApi';

export const ProductList = () => {
  getProducts();

  return (
    <Box>
      <Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {data.map((product) => (
            <Product
              key={product.idx}
              img={product.mainImage}
              desc={product.description}
              name={product.name}
              price={product.price}
              category={product.spaceCategory}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
