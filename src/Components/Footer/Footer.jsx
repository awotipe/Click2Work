import React, { useEffect } from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
// import Address from "../../Assets/location.png";
// import Phone from "../../Assets/phone.png";
// import Mail from "../../Assets/mail.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

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
              <div className={classes.conFlex}>
                <FiSend />
              </div>
              <div className={classes.pFlex}>
              <p>
                MKO Abiola Way, Providence Center, by NNPC, Lemme, Abeokuta, Ogun State.
              </p>
              </div>
            </div>
            <div className={classes.contactFlex}>
              <div className={classes.conFlex}>
               <IoCallOutline />
              </div>
              <div className={classes.pFlex}>
              <p>07043859233, 09169842806 </p>
            </div>
            </div>
            <div className={classes.contactFlex}>
              <div className={classes.conFlex}>
                <MdOutlineMailOutline />
              </div>
              <div className={classes.pFlex}>
              <p>info@niitagbara.com </p>
            </div>
            </div>
          </div>
          <div className={classes.innerFoot}>
            <h3>Subscribe</h3>
            <div className={classes.subscribe}>
              <input type="email" name="email" placeholder="Enter your email" />
              <button type="submit"><FiSend /></button>
            </div>
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
