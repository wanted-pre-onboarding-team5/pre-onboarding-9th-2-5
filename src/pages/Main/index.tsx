import { useLoaderData } from 'react-router-dom';

import { Product } from '@/apis/travelApi.type';
import { Layout } from '@/components/common/Layout';
import { ProductList } from '@/components/Main/ProductList';

export const Main = () => {
  const loadedProductData = useLoaderData() as Product[];

  return (
    <Layout>
      <ProductList products={loadedProductData} />
    </Layout>
  );
};
