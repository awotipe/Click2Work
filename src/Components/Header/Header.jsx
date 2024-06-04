import React, { useState } from "react";
import classes from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Logo.png";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    const handleNavToggle = () => {
      setNavOpen(!navOpen);
    };
  
    const handleNavLinkClick = () => {
      setNavOpen(false);
    };
    return (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <header>
            <div className={classes.logo}>
              <NavLink to="/">
                <img src={Logo} alt="logo" />
              </NavLink>
            </div>
            <nav className={classes.navMenu}>
              <NavLink to="/" className={classes.navlink}exact activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>HOME</li>
              </NavLink>
              <NavLink to="/about" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>ABOUT</li>
              </NavLink>
              <NavLink to="/mission" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>MISSION</li>
              </NavLink>
              <NavLink to="/courses" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>COURSES</li>
              </NavLink>
              <NavLink to="/sponsors" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>SPONSORS</li>
              </NavLink>
              <button>APPLY NOW</button>
            </nav>
        <div className={classes.hamburger} onClick={handleNavToggle}>
          {!navOpen ? (
            <IoMdMenu className={classes.Icons} />
          ) : (
            <IoMdClose className={classes.Icons} />
          )}
        </div>
        <div className={navOpen ? classes.active : classes.mobileMenu}>
        <nav className={classes.mobileNav}>
        <NavLink to="/" className={classes.navlink}exact activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>HOME</li>
              </NavLink>
              <NavLink to="/about" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>ABOUT</li>
              </NavLink>
              <NavLink to="/mission" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>MISSION</li>
              </NavLink>
              <NavLink to="/courses" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>COURSES</li>
              </NavLink>
              <NavLink to="/sponsors" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>SPONSORS</li>
              </NavLink>
            </nav>
            </div>
          </header>
        </div>
      </div>
    );
  };
  
  export default Header;