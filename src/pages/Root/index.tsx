import { Outlet } from 'react-router-dom';

import { Navbar } from '@/components/Navbar';

export const Root = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
