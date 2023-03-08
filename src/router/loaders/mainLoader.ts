import { getProductList } from '@/apis/travelApi';

export const mainLoader = () => {
  return getProductList();
};
