import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // har navigation par chale (even same route)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.key]); // 🔥 KEY CHANGE

  return null;
};

export default ScrollToTop;
