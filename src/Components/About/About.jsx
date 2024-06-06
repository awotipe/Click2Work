import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.aboutText}>
          <h2>About</h2>
          <p>
            ICT sector in Nigeria has experienced rapid growth over the past 20
            years, as a growing economy, Nigeria can benefit greatly from
            establishing a true Skill to Job program to bridge the gap between
            the demand and supply of IT talent.
          </p>
          <p>
            ITcore Talent Development Initiative – a non-for-profit organization
            setup to carter for the skills and talent development of underserved
            and underprivileged youths through different aspirational IT
            programs and its business arm- ITcore Business Solutions - The
            official training partner for NIIT Agbara and Abeokuta is
            implementing Click2Work Initiative to address the Nigeria’s skill
            gap in digital space and to give opportunities to underserved but
            aspiring and desirous youths to learn quality IT programs
            aspirational to nation’s developmental goals and job creation by
            removing the financial bottlenecks to learning digital skills and
            literacy programs.
          </p>
          <Link to="/about">
          <button>Read More</button>
          </Link>
        </div>
        <div className={style.aboutCard}>
          <h3>Latest News</h3>
          <div className={style.news}>
            <h5>February 3, 2024</h5>
            <p><span>NIIT Agbara targets 2,000 youths with ‘Click2Work’ project</span></p>
            <p>
              Skills and talent development corporation, NIIT Agbara is hoping
              to take about 2000 youths…
            </p>
          </div>
          <div className={style.news}>
            <h5>January 27, 2024</h5>
            <p><span>Meet The Nigerian behind Star Trek Discovery</span></p>
            <p>
              OLATUNDE OSUNSANMI   Olatunde Osunsanmi ROCKS!!! Olatunde
              Osunsanmi is a Nigerian film and…
            </p>
          </div>
          <div className={style.news}>
            <h5>January 27, 2024</h5>
            <p><span>4 Nigerians Responsible For Groundbreaking Inventions</span></p>
            <p>
              Contrary to what many people believe, Nigeria is full of many
              brilliant minds,…
            </p>
          </div>
          <div className={style.pnews}>
            <p>See All News <span>&nbsp; &#8811;</span></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
