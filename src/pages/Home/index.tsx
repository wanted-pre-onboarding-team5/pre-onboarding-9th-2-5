import { Box } from '@chakra-ui/react';

import ProductsList from '@/components/ProductsList';

const Home = () => {
  return (
    <Box display='flex' width='100vw' justifyContent='center'>
      <ProductsList />
    </Box>
  );
};

export default Home;
