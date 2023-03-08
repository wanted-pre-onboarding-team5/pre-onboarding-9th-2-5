import { useState } from 'react';

import { ProductList, SpaceFilter, PriceFilter } from '@/components';

import { useProducts } from '../hooks/useProducts';

import { getFilterdProducts } from '@/utils/filter';

export const MainPage = () => {
  const products = useProducts();
  const [spaceConditions, setSpaceConditions] = useState<string[]>([]);
  const [priceConditions, setPriceConditions] = useState<{ min: string; max: string }>({
    min: '',
    max: '',
  });

  const handleSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSpaceConditions([...spaceConditions, e.target.value]);
    } else {
      setSpaceConditions(spaceConditions.filter((space) => space !== e.target.value));
    }
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceConditions({ ...priceConditions, [name]: value });
  };

  const filteredProducts = getFilterdProducts(
    products as Product[],
    spaceConditions,
    priceConditions,
  );

  return (
    <>
      <PriceFilter inputValues={priceConditions} onChange={handlePrice} />
      <SpaceFilter onChange={handleSpace} />
      <ProductList products={filteredProducts} />
    </>
  );
};
