import React from "react";
import style from "./mid.module.scss";
import Hospital from "../../../../Assets/Images/Hospital.svg";
import Tuition from "../../../../Assets/Images/Tuition.svg";
import ArtPrices from "../../../../Assets/Images/Art-Prices.svg";
import Grouptask from "../../../../Assets/Images/Group-Task.svg";
import Law from "../../../../Assets/Images/Law.svg";
import iMac from "../../../../Assets/Images/iMac.svg";
import { useNavigate } from "react-router";

export const MidSection = () => {

  const navigate = useNavigate();

  const navigateToRegister = () => {
    // 👇️ navigate to /register
    navigate('/SignupPage');
  };

  return (
    <div className={style.MidSection}>
      <h3>EXPLORE WIDE ARRAY OF COURSES DESIGNED FOR YOU</h3>
    

      {/* Explore Courses  */}
      <div className={style.coursesContainer} onClick={navigateToRegister}>
        <div className={style.courses}>
          <div>
            <img src={Hospital} alt="" />
          </div>
          <p>Medicine</p>
        </div>
        

        <div className={style.courses}>
          <div>
            <img src={Tuition} alt="" />
          </div>
          <p>Education</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={ArtPrices} alt="" />
          </div>
          <p>Art and Humanities</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Grouptask} alt="" />
          </div>
          <p>Social Science</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={Law} alt="" />
          </div>
          <p>Law</p>
        </div>

        <div className={style.courses}>
          <div>
            <img src={iMac} alt="" />
          </div>
          <p>Information Technology</p>
        </div>

        </div>
        </div>
      
      )
}
