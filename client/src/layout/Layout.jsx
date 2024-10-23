import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopbtn from "../common/ScrollTotop";

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar will be visible */}
      <Outlet /> {/* Renders the matched child route */}
      <Footer /> {/* Footer visible across all pages */}
      <BackToTopbtn /> {/* Back to Top button */}
    </>
  );
};

export default MainLayout;
