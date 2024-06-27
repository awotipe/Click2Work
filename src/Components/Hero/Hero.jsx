import React from 'react';
import style from "./Hero.module.css";
import HeroImage from "../../Assets/hero2.png";

const Hero = () => {
  return (
    <div className={style.container}>
    <div className={style.conText}>
       <h2>BENEFIT FROM THIS <span>SKILL TO JOB</span> PROGRAM</h2>
       <p>We are here to bridge the gap between the demand and supply of IT talent. </p>
    </div>
    <div className={style.conImage}>
       <img src={HeroImage} alt="click2work" />
    </div>
    </div>
  )
}

export default Hero
