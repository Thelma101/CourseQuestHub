import React from "react";
import style from "../../../Navbar/nav.module.scss";
import Logo from "../../../../Assets/Images/Logo.svg";
import { Nav, NavLink } from "./NavElement";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

export const HomeNavbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToContacts = () => {
    navigate('/Footer');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <div className="mobileContainer">
        <div className="logo">
          <img src={Logo} alt="CourseQuestHub" />
          <p>CourseQuestHub</p>
        </div>

        {/* Hamburger Menu */}
        <div class="hamburger" onClick={toggleMobileMenu}>
          <img src="https://res.cloudinary.com/detpytqnc/image/upload/v1700065909/menu_cvjplk.svg" alt="Open Navigation" />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={style.mobileMenu}>
            <NavLink to="/HomePage">Home</NavLink>
            <NavLink to="/Course-Dashboard" activeStyle>Courses</NavLink>
            <NavLink to="/Mentors">Mentors</NavLink>
            <NavLink to="/Community-Page">Community</NavLink>
            <NavLink to="/Blog" >Blog</NavLink>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div class="desktopMenu"><NavLink to="/HomePage">Home</NavLink>
      <NavLink to="/Course-Dashboard" activeStyle>Courses</NavLink>
      <NavLink to="/Mentors">Mentors</NavLink>
      <NavLink to="/Community-Page">Community</NavLink>
      <NavLink to="/Footer" onClick={navigateToContacts}>Contact Us</NavLink>
      </div>
    </Nav>
  );
};

