import { PATH_API } from '@/constants/path';

export const getProductList = async (): Promise<Product[]> => {
  try {
    const response = await fetch(PATH_API.product);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('fetch error: ', error);
    throw error;
  }
};
