// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
        <li className={location.pathname === '/services' ? 'active' : ''}><Link to="/services">Services</Link></li>
        <li className={location.pathname === '/portfolio' ? 'active' : ''}><Link to="/portfolio">Portfolio</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
