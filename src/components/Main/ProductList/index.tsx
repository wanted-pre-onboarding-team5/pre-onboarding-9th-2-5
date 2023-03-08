import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { Filter } from '../Filter';

import { ProductItem } from './ProductItem';
import { ProductModal } from './ProductModal';

import { Product } from '@/apis/travelApi.type';
import useCart from '@/hooks/useCart';

export const ProductList = ({ products }: { products: Product[] }) => {
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
  const { addItemToCart } = useCart();

  const [filters, setFilters] = useState<{ price?: string; spaceCategory?: string[] }>({});

  const filteredProducts = products.filter((product) => {
    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split(',');
      if (maxPrice) {
        if (product.price < parseInt(minPrice) || product.price >= parseInt(maxPrice)) {
          return false;
        }
      } else {
        if (product.price < parseInt(minPrice)) {
          return false;
        }
      }
    }

    if (filters.spaceCategory && filters.spaceCategory.length > 0) {
      if (!filters.spaceCategory.includes(product.spaceCategory)) {
        return false;
      }
    }

    return true;
  });

  const handleFilterChange = (newFilters: { price?: string; spaceCategory?: string[] }) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Filter onFilter={handleFilterChange} />

      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={modalData}
        onReservationClick={() => addItemToCart(modalData)}
      />

      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {filteredProducts.map((product) => {
          return (
            <ProductItem
              key={product.idx}
              product={product}
              onOpen={() => {
                setModalData(product);
                onOpen();
              }}
              onReservationClick={() => addItemToCart(product)}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};
