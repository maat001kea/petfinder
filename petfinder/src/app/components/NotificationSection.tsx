import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationSection = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white">
      <h1 className="text-2xl font-bold text-black">FamilyFriends</h1>
      <div className="relative">
        <FaBell className="w-7 h-7 text-black" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-400 rounded-full border-2 border-pink-50"></span>
      </div>
    </div>
  );
};

export default NotificationSection;
