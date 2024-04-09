import React from "react";
import style from "./google.module.scss";
// import { NavLink as Link } from "react-router-dom";

export const Google = () => {
  return (
    <section>
        <div className={style.centergooglebtn}>
            <button className={style.googlebtn}>
                Sign up with Google
            </button>
        </div>
    </section>
  );
};