import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackToTopbtn from "./components/BackToTopbtn";
import Home from "./pages/Home"; // Home page component
import Layout from "./components/Layout"; // Layout component with Outlet
import Marquealerts from "./components/Marquealerts";
import Footer from "./components/Footer";
import GallereyPage from "./pages/GallereyPage";
import Blogpage from "./pages/Blogpage";
import AmPage from "./pages/AmPage";
import ScrollToTop from "./common/ScrollTotop";
import Date from "./pages/Date";
import AnuCard from "./components/AnuCard";
import Anubhav from "./pages/Anubhav";
import Bhatti from "./pages/Bhatti";
import Admin from "../Admin/Admin";
import AvyaktMurliPage from "../Admin/Pages/AmAdmin";
import { EditorProvider } from "../Admin/utils/EditorContext"; // Import EditorProvider
import Publishform from "../Admin/Pages/AmAdmin";
import BlogPage from "../Admin/Pages/BlogPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Layout route that wraps nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Define your nested routes */}
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="/gallery/:category" element={<GallereyPage />} />
          <Route path="/Blogs" element={<Blogpage />} />
          <Route path="/Avyakt-murli" element={<AmPage />} />
          <Route path="/schedule" element={<Date />} />
          <Route path="/anubhav" element={<Anubhav />} />
          <Route path="/bhatti" element={<Bhatti />} />
        </Route>

        {/* Admin routes wrapped with EditorProvider */}
        <Route path="/admin/*" element={<Admin />} />
        <Route
          path="/admin/murli"
          element={
            <EditorProvider>
              <Publishform />
            </EditorProvider>
          }
        />
          <Route
          path="/edit"
          element={
            <EditorProvider>
              <BlogPage />
            </EditorProvider>
          }
        />
      </Routes>
      <Footer />
      <BackToTopbtn />
    </Router>
  );
}

export default App;
