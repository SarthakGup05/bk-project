import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BackToTopbtn from "../common/ScrollTotop";

const NoNavbarLayout = () => {
  return (
    <>
      <Outlet /> {/* Renders the matched child route */}
      <Footer /> {/* Footer will still be visible */}
      <BackToTopbtn /> {/* Back to Top button */}
    </>
  );
};

export default NoNavbarLayout;
