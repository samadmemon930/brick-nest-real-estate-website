import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "../Components/Pages/Home/Home";
import About from "../Components/Pages/About/About";
import Properties from "../Components/Pages/Properties/Properties";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import ScrollToTop from "../Components/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      {/* 🔥 GLOBAL SMOOTH SCROLL CONTROLLER */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRouter;
