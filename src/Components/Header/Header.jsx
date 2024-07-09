import React, { useState } from "react";
import classes from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
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
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <nav className={classes.navMenu}>
              <Link to="/" className={classes.navlink}exact activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>HOME</li>
              </Link>
              <Link to="/about" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>ABOUT</li>
              </Link>
              <Link to="/mission" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>MISSION</li>
              </Link>
              <Link to="/courses" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>COURSES</li>
              </Link>
              <Link to="/gallery" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>GALLERY</li>
              </Link>
              <Link to="/sponsors" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>SPONSORS</li>
              </Link>
              <Link to="/register">
              <button>APPLY NOW</button>
              </Link>
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
        <Link to="/" className={classes.navlink}exact activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>HOME</li>
              </Link>
              <Link to="/about" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>ABOUT</li>
              </Link>
              <Link to="/mission" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>MISSION</li>
              </Link>
              <Link to="/courses" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>COURSES</li>
              </Link>
              <Link to="/gallery" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>GALLERY</li>
              </Link>
              <Link to="/sponsors" className={classes.navlink} activeClassName={classes.active} onClick={handleNavLinkClick}>
                <li>SPONSORS</li>
              </Link>
              <Link to="/register" onClick={handleNavLinkClick}>
              <button>APPLY NOW</button>
              </Link>
            </nav>
            </div>
          </header>
        </div>
      </div>
    );
  };
  
  export default Header;