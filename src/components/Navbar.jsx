"use client";

import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl">Martin Kosel</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
