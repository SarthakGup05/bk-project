import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get current route's pathname

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when pathname changes
  }, [pathname]); // Only run when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
