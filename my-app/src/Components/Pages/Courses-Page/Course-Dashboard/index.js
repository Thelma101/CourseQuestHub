import React, { useState } from "react";
import style from "./course.module.scss";
import Hospital from "../../../../Assets/Images/Hospital.svg";
import Tuition from "../../../../Assets/Images/Tuition.svg";
import ArtPrices from "../../../../Assets/Images/Art-Prices.svg";
import Grouptask from "../../../../Assets/Images/Group-Task.svg";
import Law from "../../../../Assets/Images/Law.svg";
import iMac from "../../../../Assets/Images/iMac.svg";
import vocation from "../../../../Assets/Images/Vocation.svg";
import { HomeNavbar } from "../../Home-Page/HomeNavBar";
import { Footer } from "../../../Footer";
import { Search } from "./Courses/search";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const CoursesDashboard = () => {
  return (
    <div>
      <HomeNavbar />
      <div className={style.DashboardContainer}>
        <Search />

        <div className={style.MidSection}>
          <p className="pb-5">EXPLORE WIDE ARRAY OF COURSES DESIGNED FOR YOU</p>

          {/* Explore Courses  */}
          <div className={style.coursesContainer}>
            <CoursesLink to="/medicine" className={style.courses}>
              <div>
                <img src={Hospital} alt="" />
              </div>
              <p>Medicine</p>
            </CoursesLink>

            <CoursesLink to="/Plumbing" className={style.courses}>
              <div>
                <img src={vocation} alt="" />
              </div>
              <p>Professional Plumbing</p>
            </CoursesLink>

            <CoursesLink to="/Software-Eng" className={style.courses}>
              <div>
                <img src={iMac} alt="" />
              </div>
              <p>Software Engineering</p>
            </CoursesLink>

            <CoursesLink to="/Law" className={style.courses}>
              <div>
                <img src={Law} alt="" />
              </div>
              <p>Law</p>
            </CoursesLink>

            <CoursesLink to="/Teaching" className={style.courses}>
              <div>
                <img src={Tuition} alt="" />
              </div>
              <p>Teaching</p>
            </CoursesLink>

            <div className={style.courses}>
              <div>
                <img src={ArtPrices} alt="" />
              </div>
              <p>Sports</p>
            </div>

            <div className={style.courses}>
              <div>
                <img src={Grouptask} alt="" />
              </div>
              <p>Social Science</p>
            </div>

            {/* Duplicate */}

            <div className={style.courses}>
              <div>
                <img src={iMac} alt="" />
              </div>
              <p>Film (School of Arts)</p>
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

            <div className={style.courses}>
              <div>
                <img src={ArtPrices} alt="" />
              </div>
              <p>Art and Humanities</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const CoursesLink = styled(Link)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;
