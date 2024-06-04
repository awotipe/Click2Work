import React from 'react';
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Goal from "../../Components/Goals/Goals";
import Course from "../../Components/Courses/Courses";
import Sponsors from "../../Components/Sponsors/Sponsors"
import Synopses from "../../Components/Synopses/Synopses"




const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Goal/>
        <Course/>
        <Synopses/>
        <Sponsors/>
    </div>
  )
}

export default Home
