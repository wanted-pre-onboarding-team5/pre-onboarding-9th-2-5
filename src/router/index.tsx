import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { Main, Reservations } from '@/pages';

import { mainLoader } from './loaders/mainLoader';
// import { reservationsLoader } from './loaders/reservationsLoader';

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
  {
    path: PATH_ROUTE.reservations,
    element: <Reservations />,
  },
];

export const router = createBrowserRouter(routes);
