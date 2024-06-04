import React from 'react'
import style from "./Courses.module.css";
import Python from "../../Assets/python.png";
import Network from "../../Assets/hardware.png";
import Design from "../../Assets/ui-ux.png";
import Graphic from "../../Assets/graphics.png";

const Courses = () => {
  return (
    <div className={style.container}>
             <div className={style.featured}>
            <h3>Featured Courses</h3>
            </div>
         <div className={style.innerContainer}>
            <div className={style.card}>
                 <div className={style.cardImage}>
                    <img src={Python} alt="Python"/>
                </div>
                <div className={style.cardText}>
                    <h4>Python <br/>Programming</h4>
                    <hr/>
                    <div className={style.free}>
                        <p>_ _1</p>
                        <p><span>Free</span></p>
                     </div>
                </div>
            </div>
            <div className={style.card}>
                 <div className={style.cardImage}>
                    <img src={Network} alt="Network"/>
                </div>
                <div className={style.cardText}>
                    <h4>Hardware/Network/ <br/>Cybersecuriet</h4>
                    <hr/>
                    <div className={style.free}>
                        <p>_ _2</p>
                        <p><span>Free</span></p>
                     </div>
                </div>
            </div>
            <div className={style.card}>
                 <div className={style.cardImage}>
                    <img src={Design} alt="Design"/>
                </div>
                <div className={style.cardText}>
                    <h4>UI/UX <br/>Design</h4>
                    <hr/>
                    <div className={style.free}>
                        <p>_ _3</p>
                        <p><span>Free</span></p>
                     </div>
                </div>
            </div>
            <div className={style.card}>
                 <div className={style.cardImage}>
                    <img src={Graphic} alt="Graphics"/>
                </div>
                <div className={style.cardText}>
                    <h4>Graphics <br/>Design</h4>
                    <hr/>
                    <div className={style.free}>
                        <p>_ _4</p>
                        <p><span>Free</span></p>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
