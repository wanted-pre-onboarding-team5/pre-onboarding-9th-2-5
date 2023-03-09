import { Box, Grid } from '@chakra-ui/react';

import data from '../../mocks/data.json';
import { Product } from '../main/product';

export const ProductList = ({ filteredPrice }: { filteredPrice?: Product[] | null }) => {
  return (
    <Box>
      <Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={3}>
          {filteredPrice
            ? filteredPrice.map((product) => <Product key={product.idx} {...product} />)
            : data.map((product) => <Product key={product.idx} {...product} />)}
        </Grid>
      </Box>
    </Box>
  );
};
