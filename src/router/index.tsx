import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { RootPage, MainPage } from '@/pages';

import { Layout } from '@/layouts/Layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/main',
    element: <Layout />,
    children: [{ path: '', element: <MainPage /> }],
  },
];

export const router = createBrowserRouter(routes);
