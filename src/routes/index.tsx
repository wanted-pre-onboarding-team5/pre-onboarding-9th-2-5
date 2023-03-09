import { createBrowserRouter, RouterProvider, Navigate, RouteObject } from 'react-router-dom';

import Layout from '@/features/layout';
import Main from '@/pages/main';
import Reservations from '@/pages/reservations';

const routeObjects: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to='/main' /> },
      { path: '/main', element: <Main /> },
      { path: '/reservations', element: <Reservations /> },
    ],
  },
];

const router = createBrowserRouter(routeObjects);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
