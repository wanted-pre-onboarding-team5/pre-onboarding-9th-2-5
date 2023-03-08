import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATH_ROUTE } from 'src/constants';

import { rootLoader } from './loaders';

const Error = lazy(() => import('@/pages/Error'));
const Home = lazy(() => import('@/pages/Home'));
const Layout = lazy(() => import('@/pages/Layout'));
const Reservations = lazy(() => import('@/pages/Reservations'));

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: PATH_ROUTE.root,
        element: <Home />,
        loader: rootLoader,
      },
      {
        path: PATH_ROUTE.main,
        element: <Home />,
      },
      {
        path: PATH_ROUTE.reservations,
        element: <Reservations />,
      },
      {
        path: PATH_ROUTE.any,
        element: <Error />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
