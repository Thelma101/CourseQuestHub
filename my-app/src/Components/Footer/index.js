import React from "react";
import { NavLink as Link } from "react-router-dom";
import style from "./footer.module.scss"
import styled from "styled-components";
import facebook from "../../Assets/Images/logos_facebook.svg";
import insta from "../../Assets/Images/skill-icons_instagram.svg";
import twitter from "../../Assets/Images/devicon_twitter.svg";
import { Copyright } from "./copyright";


export const Footer = () => {
    return(
        <div>

        <div className={style.footerContainer}>

        <div className={style.contactContainer}>
            <div>
                <p className={style.boldP}> Contact Us</p>
                <NavLink to="tel:09033265715">Phone 1: 09033265715</NavLink>
                <NavLink to="tel:08192523881">Phone 2: 08192523881</NavLink>
                <NavLink to="mailto:coursequesthub@gmail.com">Email: coursequesthub@gmail.com</NavLink>


            </div>

            <div className={style.socials}>
            <p className={style.boldP}> Connect With Us on Social Media</p>
            <span>
            <img src={insta}/>
            <NavLink to="insta:coursequesthub">coursequesthub</NavLink>
            </span>
            <span>

            <img src={twitter}/>
                <NavLink to="twitter:coursequesthub">coursequesthub</NavLink>
            </span>
            <span>

                <img src={facebook}/>
                <NavLink to="facebook:coursequesthub">coursequesthub</NavLink>
            </span>

            </div>

            <div className={style.subscribe}>
                <p className={style.boldP}>Subscribe for Updates</p>
                <input type="text" placeholder="Enter your email"></input>
            </div>
        </div>
        </div>
        <Copyright/>
        </div>
    )
}

export const NavLink = styled(Link)`
display: block;
padding: 5px 0;
text-decoration: none;
color: #fff;
`