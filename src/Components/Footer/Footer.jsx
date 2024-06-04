import React, { useEffect } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import Address from "../../Assets/location.png";
import Phone from "../../Assets/phone.png";
import Mail from "../../Assets/mail.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={classes.container}>
      <footer>
        <div className={classes.foot}>
          <div className={classes.innerFoot}>
            <div className={classes.logo}>
              <Link to="/">
                <img src={Logo} alt="FooterLogo" />
              </Link>
            </div>
            <p>
              The company, which was set up in 1981 to help the nascent IT
              industry overcome its human resource challenges, today ranks among
              the world's leading training companies owing to its vast and
              comprehensive array of talent development programs.
            </p>
          </div>
          <div className={classes.innerFoot}>
            <h3>Featured Link</h3>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="about">
              <p>About</p>
            </Link>
            <Link to="mission">
              <p>Mission</p>
            </Link>
            <Link to="courses">
              <p>Courses</p>
            </Link>
            <Link to="sponsors">
              <p>Sponsors</p>
            </Link>
          </div>
        </div>
        <div className={classes.foot}>
          <div className={classes.innerFoot}>
            <h3>Contact Us</h3>
            <div className={classes.contactFlex}>
              <div className={classes.conFlex1}>
                <img src={Address} className={classes.conFlex} alt="address"/>
              </div>
              <div className={classes.pFlex1}>
              <p>
                Suite E, Agbara Estate Shopping Mall, Beside Stanbic IBTC Bank,
                Agbara
              </p>
              </div>
            </div>
            <div className={classes.contactFlex}>
              <div className={classes.conFlex}>
                <img src={Phone} alt="phone" />
              </div>
              <div className={classes.pFlex2}>
              <p>08094355000, 08094355003 </p>
            </div>
            </div>
            <div className={classes.contactFlex}>
              <div className={classes.conFlex}>
                <img src={Mail} alt="mail" />
              </div>
              <div className={classes.pFlex}>
              <p>info@niitagbara.com </p>
            </div>
            </div>
          </div>
          <div className={classes.innerFoot}>
            <h3>Subscribe</h3>
            <p>2 Soretire street, Ogba Ikeja, Lagos</p>
            <p>
              <a href="tel: +2347038477446">Call: +2347038477446</a>
            </p>
            <p>
              <a href="mailto: magnificient@gmail.com">
                Email: magnificient@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className={classes.downFooter}>
        <div className={classes.copyright}>
          <p>© Copyright 2024 Click2Work</p>
        </div>
      </div>
      <div className={classes.scrollUp} onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <BsFillArrowUpCircleFill className={classes.iconscroll} />
      </div>
    </div>
  );
};

export default Footer;
