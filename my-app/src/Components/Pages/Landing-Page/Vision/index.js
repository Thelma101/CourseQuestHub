import React from "react";
import style from "./vision.module.scss";
import button from "../CareerPath/career.module.scss"
import workman from "../../../../Assets/Images/workman.svg";


export const Vision = () => {

    return(
        <div className={style.visionContainer}>

            <div className={style.visionText}>
                <h2>Vision</h2>
                <p>To ignite every Nigerian youth's passion by 2034,  equipping them to chart their dream careers, building a future where informed choices fuel potential and shape a brighter Nigeria.</p>
                <div>
                <button className={button.register}>Register</button>
                </div>
            </div>

            <div className={style.workman}>
                <img src={workman} alt="" className={style.workman}/>
            </div>

        </div>
    )
}