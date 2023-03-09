import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { Main } from '@/pages';

import { mainLoader } from './loaders/mainLoader';

import { PATH_ROUTE } from '@/constants/path';
import { Root } from '@/pages/Root';

const routes: RouteObject[] = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
  },
  {
    path: PATH_ROUTE.main,
    element: <Main />,
    loader: mainLoader,
  },
];

export const router = createBrowserRouter(routes);
