import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { RootPage, MainPage, CartPage } from '@/pages';

import { Layout } from '@/layouts/Layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/main',
    element: <Layout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/reservations',
    element: <Layout />,
    children: [{ index: true, element: <CartPage /> }],
  },
];

export const router = createBrowserRouter(routes);
