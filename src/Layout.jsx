import { Outlet } from 'react-router-dom';
import Header from './widgets/Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
