import React from "react";
import students  from "../../../../Assets/Images/HappyPeople.jpg";
import style from "./career.module.scss";


export const RegisterButton = () => {

    return(
        <div className={style.welcomebg}>
           <div className={style.welcomeContainer}>
            <img src={students} alt="" className={style.studentImg}></img>
           <div className={style.welcomeText}>
           <h2>Wondering what path to go next?</h2>
           <p>Discover your dream career right here</p>
           {/* <button className={style.register}>Register</button> */}
           </div>
           </div>
         
        </div>




    )



}