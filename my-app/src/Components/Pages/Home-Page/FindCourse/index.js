import React from "react";
import style from "../../Landing-Page/MidSection/mid.module.scss";
import Hospital from "../../../../Assets/Images/Hospital.svg";
import Law from "../../../../Assets/Images/Law.svg";
import iMac from "../../../../Assets/Images/iMac.svg";
import { useNavigate } from "react-router-dom";


export const PopularCourses = () => {

  const navigate =  useNavigate();
  const coursesDashboard = () => {

    navigate('/Course-Dashboard');
  }

  return (
    <div className={style.MidSection}>
      <h3>POPULAR COURSES</h3>

      {/* Explore Courses  */}
      <div className={style.coursesContainer}>
        <div className={style.courses} onClick={coursesDashboard}>
          <div>
            <img src={Hospital} alt="" />
          </div>
          <p>Medicine</p>
        </div>

        <div className={style.courses} onClick={coursesDashboard}>
          <div>
            <img src={Law} alt="" />
          </div>
          <p>Law</p>
        </div>

        <div className={style.courses} onClick={coursesDashboard}>
          <div>
            <img src={iMac} alt="" />
          </div>
          <p>Information Technology</p>
        </div>

        </div>
        </div>
      
      )
}
