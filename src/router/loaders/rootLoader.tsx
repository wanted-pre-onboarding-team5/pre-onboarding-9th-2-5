import { redirect } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

export const rootLoader = () => {
  return redirect(PATH_ROUTE.main);
};
