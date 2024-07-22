import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-64">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#/sarinnaSung"
              className="text-royal-blue text-2xl font-bold"
            >
              Sarinna Sung
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="/sarinnsSung/#/sarinnaSung"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg hover:text-white"
            >
              Home
            </a>
            <a
              href="/sarinnaSung/#/sarinnaSung/Projects"
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg hover:text-white"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
