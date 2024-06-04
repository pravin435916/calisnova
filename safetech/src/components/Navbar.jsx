import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 flex items-center justify-between">
      {/* Left side logo */}
      <div className="flex items-center gap-4">
        <img className='w-12 h-12' src="/assets/logo.webp" alt="" />
        <span className="text-2xl font-bold">SafeTech India</span>
      </div>

      {/* Right side navigation */}
      <div className={`hidden md:flex items-center space-x-8 mr-10`}>
        <Link to='/services'>Services</Link>
        <Link to='/about'>Portfolio</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/book'><button>Book a Session</button></Link>
        <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/login'><button>Login</button></Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden">
        <button className="" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex justify-center items-center flex-col gap-8 py-4 md:hidden absolute top-16 left-0 right-0 bg-gray-200">
          <Link to='/services'>Services</Link>
        <Link to='/about'>Portfolio</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/book'><button>Book a Session</button></Link>
        <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/login'><button>Login</button></Link>
        </div>
      )}
    </nav>
  );
};
