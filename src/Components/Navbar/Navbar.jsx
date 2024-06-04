import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Navigation App
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mission" activeClassName="active">
              Mission
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" activeClassName="active">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sponsors" activeClassName="active">
              Sponsors
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;