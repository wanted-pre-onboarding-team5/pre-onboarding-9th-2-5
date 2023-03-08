import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Main from '@/pages/Main';
import Reservations from '@/pages/Reservations';

interface RouteObject {
  path: string;
  element: React.ReactNode;
}

const routeObjects: RouteObject[] = [
  { path: '/', element: <Navigate to='/main' /> },
  { path: '/main', element: <Main /> },
  { path: '/reservations', element: <Reservations /> },
];

const router = createBrowserRouter(routeObjects);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
