import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-10">  {/* Increase padding on y-axis */}
      <div className="container mx-auto w-full flex justify-between items-center">
        <div className="text-white text-xl font-bold"><img src='https://static.vecteezy.com/system/resources/previews/006/470/731/non_2x/modern-animal-pet-logo-template-free-vector.jpg' className='w-10'/></div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 011.414 1.414l-12 12a1 1 0 01-1.414-1.414l12-12z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="lg:flex lg:justify-between text-white lg:space-x-6 transform lg:-translate-x-1/3">
            <li>
              <Link to="/" className="block lg:inline-block mt-4 lg:mt-0 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block lg:inline-block mt-4 lg:mt-0 text-lg">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="block lg:inline-block mt-4 lg:mt-0 text-lg">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="block lg:inline-block mt-4 lg:mt-0 text-lg">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
