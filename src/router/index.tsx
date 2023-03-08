import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { Root, Main, Error } from '@/pages';

import { rootLoader } from '@/router/loaders';

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
  },
  {
    path: PATH_ROUTE.main,
    element: <Main />,
    errorElement: <Error />,
  },
];

export const router = createBrowserRouter(routes);
