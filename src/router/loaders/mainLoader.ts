import { fetchData } from '@/utils';

export const mainLoader = () => {
  return fetchData('src/mocks/data.json');
};
