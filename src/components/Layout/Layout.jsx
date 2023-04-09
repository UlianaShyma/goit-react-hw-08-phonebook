import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { WrapperMain } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <WrapperMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </div>
  );
};

export default Layout;
