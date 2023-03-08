import { useEffect, useState } from 'react';

import { getProducts } from '@/apis/mainApi';
import { Filter } from '@/Components/main/Filter';
import { ProductList } from '@/Components/ProductList';

export const Main = () => {
  const [products, setProducts] = useState(null);
  const [priceSelect, setPriceSelect] = useState('');
  const [spaceSelect, setSpaceSelect] = useState('');
  const [filteredPrice, setFilteredPrice] = useState(null);

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePrice = () => {
    if (priceSelect === 'less10000') {
      setFilteredPrice(products.filter((product) => product.price <= 10000));
    }
    if (priceSelect === '10000and20000') {
      setFilteredPrice(
        products.filter((product) => product.price > 10000 && product.price < 20000),
      );
    }
    if (priceSelect === 'over20000') {
      setFilteredPrice(products.filter((product) => product.price >= 20000));
    }
  };

  useEffect(() => {
    handlePrice();
  }, [priceSelect]);

  return (
    <>
      <Filter
        priceSelect={priceSelect}
        setPriceSelect={setPriceSelect}
        spaceSelect={spaceSelect}
        setSpaceSelect={setSpaceSelect}
      />
      <ProductList products={products} filteredPrice={filteredPrice} />
    </>
  );
};
