import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
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
    <nav className="p-4 flex items-center justify-between shadow-xl">
      {/* Left side logo */}
      <div className="flex items-center gap-2">
        <img className='w-12 h-12' src="/assets/logo1.png" alt="" />
        <span className="text-2xl font-bold font-serif">CALISNOVA</span>
      </div>

      {/* Right side navigation */}
      <div className={`hidden md:flex items-center space-x-8 mr-10 `}>
        <Link className="focus:text-blue-400 hover:text-blue-400" to='/'>Home</Link>
        <Link className="focus:text-blue-400 hover:text-blue-400" to='/offers'>Offers</Link>
        <Link className="focus:text-blue-400 hover:text-blue-400" to='/partners'>Partners</Link>
        <SignedIn>
          <Link className="focus:text-blue-400 hover:text-blue-400" to='/material'>Materials</Link>
        </SignedIn>
        <Link className="focus:text-blue-400 hover:text-blue-400" to='/blog'>Blog</Link>
        <Link className="focus:text-blue-400 hover:text-blue-400" to='/contact'>Contact</Link>
        <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/book'><button>Book a Session</button></Link>
        <SignedOut>
          <SignInButton className='px-4 py-2 bg-black text-white rounded-2xl' />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <Link className='px-4 py-2 bg-black text-white rounded-2xl' to='/login'><button>Login</button></Link> */}
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
        <div className="flex justify-center items-center flex-col gap-8 py-4 md:hidden absolute top-16 left-0 right-0 bg-gray-200 z-20">
          <Link onClick={toggleMenu} to='/'>Home</Link>
          <Link onClick={toggleMenu} to='/offers'>Offers</Link>
          <Link onClick={toggleMenu} to='/partners'>Partners</Link>
          <SignedIn>
            <Link className="focus:text-blue-400 hover:text-blue-400" to='/material'>Materials</Link>
          </SignedIn>
          <Link onClick={toggleMenu} to='/blog'>Blog</Link>
          <Link onClick={toggleMenu} to='/contact'>Contact</Link>
          <Link onClick={toggleMenu} className='px-4 py-2 bg-black text-white rounded-2xl' to='/book'><button>Book a Session</button></Link>
          <SignedOut>
            <SignInButton className='px-4 py-2 bg-black text-white rounded-2xl' />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};
