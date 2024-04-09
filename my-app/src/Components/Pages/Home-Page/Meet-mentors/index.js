import React from "react";
import style from "./meetM.module.scss";
import maleMentor from "../../../../Assets/Images/maleMentor.svg";
import femaleMentor from "../../../../Assets/Images/femaleMentor.svg";
import ForwardButton from "../../../../Assets/Images/Forward-Button.svg";

export const MeetMentors = () => {
  return (
    <div className={style.mentorContainer}>
      <h3>Meet Our Mentors</h3>

      <div className={style.mentorTextContainer}>
        <div className={style.mentorCard}>
          <div className={style.mentor}>
            <img src={maleMentor} />
          </div>

          <p>
            Dr. Ibrahim Ayodele<span>Certified Career Coach </span>
          </p>
        </div>

        <div className={style.mentorCard}>
          <div className={style.mentor}>
            <img alt="" src={femaleMentor} />
          </div>
          <p>
            Mrs. Stella Cyril
            <span>Productivity Coach, Pan-Atlantic University, Lagos</span>
          </p>
        <div className={style.forwardbutn}>
            <img src={ForwardButton} alt=""/>
        </div>
        </div>
      </div>
    </div>
  );
};
