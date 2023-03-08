import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import DataApi from '@/apis';

import Filter from './Filter';
import PhotoCard from './PhotoCard';

const ProductsList = () => {
  const [products, setProducts] = useState<null | Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await DataApi.getData();
      setProducts(response);
    };

    fetchData();
  }, []);

  return (
    <Box w='100%' maxWidth='1300px'>
      <Filter />
      <SimpleGrid minChildWidth='250px' gap='30px'>
        {products &&
          products.map((product) => (
            <PhotoCard
              key={product.idx}
              product={product}
              name={product.name}
              mainImage={product.mainImage}
              description={product.description}
              price={product.price}
              spaceCategory={product.spaceCategory}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsList;
