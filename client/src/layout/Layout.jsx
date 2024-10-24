import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopbtn from "../common/ScrollTotop";

const MainLayout = () => {
  const location = useLocation();

  // List of routes where the footer should not appear
  const hideFooterRoutes = ['/quiz'];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div>
      {/* Navbar remains always visible */}
      <Navbar />

      {/* Main content will be rendered here */}
      <Outlet />

      {/* Conditionally render footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;


