"use client";

import React from "react";
import { FaHome, FaStar, FaCommentDots, FaUser } from "react-icons/fa";

const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-pink-100 shadow-md z-50">
      <div className="flex justify-around py-3">
        {/* Aktive ikon */}
        <FaHome className="text-xl text-red-400" />
        <FaStar className="text-xl text-gray-400" />
        <FaCommentDots className="text-xl text-gray-400" />
        <FaUser className="text-xl text-gray-400" />
      </div>
    </nav>
  );
};

export default FooterNav;
