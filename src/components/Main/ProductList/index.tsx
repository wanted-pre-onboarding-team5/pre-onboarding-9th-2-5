import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { ProductItem } from './ProductItem';
import { ProductModal } from './ProductModal';

import { Product } from '@/apis/travelApi.type';

export const ProductList = ({ Products }: { Products: Product[] }) => {
  const [modalData, setModalData] = useState<Product>({
    idx: 0,
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: 0,
    maximumPurchases: 0,
    registrationDate: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ProductModal isOpen={isOpen} onClose={onClose} product={modalData} />
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {Products.map((product) => {
          return (
            <ProductItem
              key={product.idx}
              product={product}
              onOpen={() => {
                setModalData(product);
                onOpen();
              }}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};
