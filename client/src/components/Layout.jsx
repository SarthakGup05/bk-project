import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* This is where the nested components will be rendered */}
      <Outlet />
    </div>
  );
}

export default Layout;
