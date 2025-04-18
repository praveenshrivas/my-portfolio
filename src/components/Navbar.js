import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Left: Name */}
      <div className="text-2xl font-bold">
        <span className="text-blue-500">Praveen</span>{' '}
        <span className="text-white">Shrivas</span>
      </div>

      {/* Right: Navigation links */}
      <ul className="flex space-x-6 text-sm sm:text-base">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Project</li>
        <li className="hover:text-blue-400 cursor-pointer">Experience</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;