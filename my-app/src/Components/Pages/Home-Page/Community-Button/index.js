import React, { useState } from "react";
import style from "./comm.module.scss";
import { DynamicButton } from "../HomeButton";
import { useNavigate } from "react-router-dom";


export const JoinCommunity = () => {

    const navigate = useNavigate();
    const navigateToCommunity = () => {
        // navigate to /community
        navigate('/Community-Page');
      };

    const handleCommunity = {
        background: '#3173C8',
        color: '#fff',
        border: 'none',
        padding: '10px 35px',
        borderRadius: '30px',
        fontWeight: 500
       
    };

    return(
        <div className={style.missionContainer}>

            <div className={style.MissionText}>
                <h2>BE A PART OF OUR VIBRANT COMMUNITY</h2>
                <p>Find your tribe! Connect with peers and mentors in our dynamic community. Ask questions, share experiences, and gain valuable insights to confidently navigate your career path.</p>

                <DynamicButton style={handleCommunity} value={"Join Our Community"}  communityPage={navigateToCommunity}/>

            </div>

        </div>
    )
}