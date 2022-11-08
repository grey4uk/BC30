import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from 'components/Navigator/Navigator';

const SharedLayout = () => {
  return (
    <>
      <Navigator />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
