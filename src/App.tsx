import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from 'src/router';

import Loading from './pages/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
