import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { Root, Main, Error, Reservation } from '@/pages';

import { reservationLoader, rootLoader } from '@/router/loaders';

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
  {
    path: PATH_ROUTE.reservations,
    element: <Reservation />,
    errorElement: <Error />,
    loader: reservationLoader,
  },
];

export const router = createBrowserRouter(routes);
