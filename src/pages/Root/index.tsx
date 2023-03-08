import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <div>
        <p>Navbar</p>
        <Outlet />
      </div>
    </>
  );
};
