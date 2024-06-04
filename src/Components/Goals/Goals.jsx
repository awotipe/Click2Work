import React from "react";
import style from "./Goals.module.css";
import Support from "../../Assets/goal1.png"
import Develop from "../../Assets/goal2.png"
import Expose from "../../Assets/goal3.png"
import Improve from "../../Assets/goal4.png"

const Goals = () => {
  return (
    <div className={style.container}>
    <div className={style.innerContainer}>
      <h3>GOALS AND OBJECTIVES</h3>
      <div className={style.goal}>
        <div className={style.goalImage}>
          <img src={Support} alt="support" />
        </div>
        <div className={style.goalText}>
          <p>
            Support the career development of deserving youths in the tech
            industry by providing them with opportunities to learn new skills,
            advance their roles, or achieve their goals.
          </p>
        </div>
      </div>
      <div className={style.goal}>
        <div className={style.goalImage}>
          <img src={Develop} alt="develop" />
        </div>
        <div className={style.goalText}>
          <p>
            To develop the personality of Nigerian youths with the desire for
            growth and development but with financial constraint to a higher
            level.
          </p>
        </div>
      </div>
      <div className={style.goal}>
        <div className={style.goalImage}>
          <img src={Expose} alt="expose" />
        </div>
        <div className={style.goalText}>
          <p>
            To expose young Nigerians to innovative possibilities in Technology
            and develop high-level skilled manpower for various sectors of the
            Nigerian economy
          </p>
        </div>
      </div>
      <div className={style.goal}>
        <div className={style.goalImage}>
          <img src={Improve} alt="improve" />
        </div>
        <div className={style.goalText}>
          <p>
            To improve the knowledge and confidence of participants to use
            technology for work, learning and daily life. To offer deep-rooted
            tech and digital skill acquisition training that impacts a lasting
            and positive impression of science and technology, and provides
            actionable knowledge.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Goals;
