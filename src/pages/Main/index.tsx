import { useEffect, useState } from 'react';

import { getProducts } from '@/apis/mainApi';
import { Filter } from '@/Components/main/Filter';
import { ProductList } from '@/Components/ProductList';

export const Main = () => {
  const [products, setProducts] = useState('');

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Filter />
      <ProductList products={products} />
    </>
  );
};
