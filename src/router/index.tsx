import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { Main, Reservations, Error, Root } from '@/pages';

import { rootLoader, mainLoader } from './loaders';

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: rootLoader,
      },
      {
        path: PATH_ROUTE.main,
        element: <Main />,
        errorElement: <Error />,
        loader: mainLoader,
      },
      {
        path: PATH_ROUTE.reservations,
        element: <Reservations />,
        errorElement: <Error />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
