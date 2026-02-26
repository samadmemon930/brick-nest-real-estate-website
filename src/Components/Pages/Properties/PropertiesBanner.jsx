import React from "react";
import { Link } from "react-router-dom";

const PropertiesBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] lg:h-[650px] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/Images/banner.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 pt-20 md:pt-24 lg:pt-28 ">
        
        {/* Breadcrumb */}
        <p className="text-[18px] md:text-[24px] text-gray-400">
          <Link
            to="/"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </Link>{" "}
          / Properties
        </p>

        {/* Page Title */}
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider">
          PROPERTIES
        </h1>

      </div>
    </div>
  );
};

export default PropertiesBanner;