import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Links array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className='fixed top-0 left-0 z-999 w-full bg-black'>
      <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-20 py-4 relative">

        {/* Left: Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-4xl">
          <Link to="/">
            <span className="tracking-wider text-4xl">
              Bric<span className="text-[#6919dd]">Kn</span>est
            </span>
          </Link>
        </div>

        {/* Center: Links (Desktop) */}
        <div className="flex justify-center">
          <ul className='hidden lg:flex nav-menu space-x-4 xl:space-x-5 text-white font-medium'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className='hover:text-[#6919dd] transition-colors duration-300'
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: buttons */}
        <div className='flex items-center space-x-4 '>

          {/* Desktop button */}
          <button className='hidden md:flex lg:flex nav-btn bg-[#6919dd] border border-[#6919dd] btn relative text-white rounded overflow-hidden px-4 py-2 font-semibold text-md'>
            <Link to="/" className='relative z-1'>Add Listing</Link>
          </button>

          {/* Mobile Hamburger */}
          <button
            className='lg:hidden text-white text-2xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden nav-menu bg-black text-white px-4 md:px-6 py-3 space-y-3 transition-all duration-300">
          {navLinks.map((link, index) => (
            <li key={index} className='hover:text-[#6919dd] transition-colors duration-300'>
              <Link to={link.path} onClick={() => setMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar;
