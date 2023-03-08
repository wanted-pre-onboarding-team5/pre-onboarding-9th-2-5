import { RouterProvider } from 'react-router-dom';

import { TravelProvider } from './providers';
import { router } from './router';

const App = () => {
  return (
    <TravelProvider>
      <RouterProvider router={router} />
    </TravelProvider>
  );
};

export default App;
