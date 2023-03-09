import { createBrowserRouter } from 'react-router-dom';

import { Main } from './pages/Main';
import { Reservations } from './pages/Reservations';
import { Root } from './pages/Root';

const routes = [
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/reservations',
    element: <Reservations />,
  },
];

export const router = createBrowserRouter(routes);
