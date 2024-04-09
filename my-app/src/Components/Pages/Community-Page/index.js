import React, { useState, useEffect } from "react";
import { HomeNavbar } from "../Home-Page/HomeNavBar";
import { Footer } from "../../Footer";
import style from "./commPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Community = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check the screen width and set isOpen accordingly
    const screenWidth = window.innerWidth;
    if (screenWidth >= 769) {
      setIsOpen(true); // Menu is open initially for screens 769px and above
    }
  }, []); // Run this effect only once, on component mount

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="Parent">
      <HomeNavbar />
      <div className={style.communityContainer}>
        <div className={style.communityChannelsContainer}>
          <div className={`${style.communityChannels} `}>
            <CommunityNav to="/Community-Page">
              <p>#Welcome</p>
            </CommunityNav>
            <CommunityNav to="/Direct-Messages" activeStyle>
              <p>#Direct Messages</p>
            </CommunityNav>
            <div>
              <p className={style.menuToggle}>
                Channels{" "}
                <FontAwesomeIcon icon={faCaretDown} onClick={toggleMenu} />{" "}
              </p>{" "}
              {isOpen && (
                <div>
                  <CommunityNav to="/General" activeStyle>
                    <p>#General</p>
                  </CommunityNav>
                  <CommunityNav to="/Agriculture" activeStyle>
                    <p>#Agriculture</p>
                  </CommunityNav>
                  <CommunityNav to="/Arts-&-Humanities" activeStyle>
                    <p>#Arts and Humanities</p>
                  </CommunityNav>
                  <CommunityNav to="/Vocational-Education" activeStyle>
                    <p>#Vocational Education</p>
                  </CommunityNav>
                  <CommunityNav to="/Building-&-Architecture" activeStyle>
                    #Building and Architecture
                  </CommunityNav>
                  <CommunityNav to="/Sports" activeStyle>
                    #Sports
                  </CommunityNav>
                  <CommunityNav to="/Communication" activeStyle>
                    #Communication
                  </CommunityNav>
                  <CommunityNav to="/Information-Technology" activeStyle>
                    #Information Technology
                  </CommunityNav>
                  <CommunityNav to="/Business-&-Economics" activeStyle>
                    #Business and Economics
                  </CommunityNav>
                  <CommunityNav to="/Medical-Science" activeStyle>
                    #Medical Science
                  </CommunityNav>
                  <CommunityNav to="/Social-Science" activeStyle>
                    #Social Science
                  </CommunityNav>
                  <CommunityNav to="/Education" activeStyle>
                    #Education
                  </CommunityNav>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={style.CommunityContents}>
          <p className={style.CommunityWelcome}>
            Welcome to CourseQuestHub's community
          </p>
          <p>
            Hello future leaders and passionate minds! Welcome to this vibrant
            space, your haven for career exploration. Think of this as your
            personal hub, bustling with peers, mentors, and experts here to
            support your exciting path. Make sure to explore the diverse
            channels available on the sidebar of the page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const CommunityNav = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0 0.5rem;
  cursor: pointer;
  display: block;
  margin: 1rem 0rem;

  &.active {
    color: #fff;
    background: #80a4db;
    border-radius: 30px;
    padding: 2px 20px;
  }

  & > p {
    margin-bottom: 0px;
  }

  @media ((min-width: 320px) and (max-width: 768px)) {
    display: grid;
    gap: 80px;
    grid-template-column: repeat(130px, 1fr);
  }
`;
