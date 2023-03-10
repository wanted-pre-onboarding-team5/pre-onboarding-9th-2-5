import { fetchData } from '@/utils';

export const mainLoader = () => {
  return fetchData('/data.json');
};
