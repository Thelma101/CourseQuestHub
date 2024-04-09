import React from "react";
import style from "./uniF.module.scss";
import button from "../CareerPath/career.module.scss"
import Scientist from "../../../../Assets/Images/girl-scientist.svg";


export const Mission = () => {

    return(
        <div className={style.missionContainer}>

            <div className={style.scientist}>
                <img src={Scientist} alt="" className={style.scientistImg}/>
            </div>

            <div className={style.MissionText}>
                <h2>Mission</h2>
                <p>Our mission is to empower secondary students in Nigeris by providing a comprehensive platform that guides them  through the crucial decisions of choosing their academic and career paths.</p>
                <div>

                <button className={button.register}>Register</button>
                </div>
            </div>

        </div>
    )
}