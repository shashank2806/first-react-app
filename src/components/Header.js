import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <span>File Upload</span>
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
