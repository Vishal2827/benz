import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react'; // Lucide icons for hamburger

import logo from '../assets/Mercedes-Logo.svg';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Category', path: '/category' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-white text-lg font-medium items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition duration-300 ${
                  isActive ? 'text-blue-400' : 'text-white'
                }`
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}

          <NavLink
            to="/register"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-full shadow-md font-semibold transition duration-300"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-white text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 pb-2 hover:text-blue-400"
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-center text-white px-5 py-2 rounded-full font-semibold"
          >
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
