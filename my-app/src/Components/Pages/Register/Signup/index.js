import React from "react";
import style from "./signup.module.scss";
// import { NavLink as Link } from "react-router-dom";

export const Signup = () => {
  return (
    <section className="box">
      <div className={style.formcontainer}>
        <h2 className={style.reg}>Sign Up</h2>

        <form className={style.formbody}>
        
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
            <input type="tel" placeholder="Phone" name="tel" />
            <input type="email" placeholder="Email" name="lastname" />
            <input type="password" placeholder="Password" name="password" />
            <input  type="password" placeholder="Confirm Password" name="password"/>

          <div className={style.terms}>
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">
              I agree to CourseQuestHub User Agreement and Privacy Policy
            </label>
          </div>
          <button className={style.regbutton} type="submit">
            Register
          </button>
        </form>
      </div>  
    </section>
    
  );
};
