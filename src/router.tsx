import { createBrowserRouter } from 'react-router-dom';

import { Main } from './pages/Main';
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
];

export const router = createBrowserRouter(routes);
