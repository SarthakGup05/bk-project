import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 // Layout with Navbar
 // Layout without Navbar
import ScrollToTop from "./common/ScrollTotop";
import Home from "./pages/Home";
import GallereyPage from "./pages/GallereyPage";
import Blogpage from "./pages/Blogpage";
import AmPage from "./pages/AmPage";
import Date from "./pages/Date";
import Anubhav from "./pages/Anubhav";
import Bhatti from "./pages/Bhatti";
import ExamPage from "./pages/ExamPage";
import SignInForm from "./pages/signInForm";
import SignUpForm from "./pages/Signup";
import Admin from "../Admin/Admin"; // Admin Dashboard
import Publishform from "../Admin/Pages/AmAdmin"; // Admin Murli Page
import BlogPage from "../Admin/Pages/BlogPage"; // Admin Blog Page
import { EditorProvider } from "../Admin/utils/EditorContext"; // Admin Editor Context
import NoNavbarLayout from "./layout/Nonav";
import MainLayout from "./layout/Layout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:category" element={<GallereyPage />} />
          <Route path="/blogs" element={<Blogpage />} />
          <Route path="/avyakt-murli" element={<AmPage />} />
          <Route path="/schedule" element={<Date />} />
          <Route path="/anubhav" element={<Anubhav />} />
          <Route path="/bhatti" element={<Bhatti />} />
        </Route>

        {/* Routes without Navbar */}
        <Route element={<NoNavbarLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/exam" element={<ExamPage />} />
        </Route>

        {/* Admin Routes */}
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
          path="/admin/blog"
          element={
            <EditorProvider>
              <BlogPage />
            </EditorProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
