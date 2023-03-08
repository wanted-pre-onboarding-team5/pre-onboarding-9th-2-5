import { SimpleGrid } from '@chakra-ui/react';

import { ProductItem } from './ProductItem';

import { Product } from '@/apis/travelApi.type';

export const ProductList = ({ Products }: { Products: Product[] }) => {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
      {Products.map(
        ({
          idx,
          name,
          mainImage,
          description,
          spaceCategory,
          price,
          maximumPurchases,
          registrationDate,
        }) => {
          return (
            <ProductItem
              key={idx}
              idx={idx}
              name={name}
              mainImage={mainImage}
              description={description}
              spaceCategory={spaceCategory}
              price={price}
              maximumPurchases={maximumPurchases}
              registrationDate={registrationDate}
            />
          );
        },
      )}
    </SimpleGrid>
  );
};
