// src/components/PageHero.jsx
import React from "react";

const PageHero = ({ title, breadcrumb, heroImg }) => {
  return (
    <div
      className="w-full h-64 relative flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">{title}</h1>
        <p className="mt-2 text-sm md:text-base tracking-wider text-gray-200">
          {breadcrumb}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
