import React from "react";
import { HomeNavbar } from "../../../Home-Page/HomeNavBar";
import style from "./dynam.module.scss";
import { Search } from "./search";

export const DynamicCourses = ({ h3, p, embed }) => {
  return (
    <div>
      <HomeNavbar />
      <div className={style.coursesContainer}>
        <Search />

        <div className={style.MidSection}>
          <h3>{h3}</h3>
          <p>{p}</p>
          <div>{embed}</div>
          <p>
            Find list of universities offering medicine <a href="">here</a>{" "}
            Watch the life of an architect below
          </p>
        </div>
      </div>
    </div>
  );
};
