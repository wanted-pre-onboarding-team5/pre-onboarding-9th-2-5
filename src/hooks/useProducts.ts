import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState<null | Product[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('src/mocks/data.json').then((response) => response.json());
      setProducts(response);
    };

    fetchData();
  }, []);

  return products;
};
