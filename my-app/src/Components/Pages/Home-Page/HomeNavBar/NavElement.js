import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .logo {
    display: inherit;
    align-items: center;
    font-weight: 700;

    & > p {
      margin: 0px;
    }
  }

  .desktopMenu {
    @media ((min-width: 320px) and (max-width: 1024px)) {
      display: none;
    }
  }

  .hamburger {
    // Hide hamburger on big screen
    display: none;

    // Show hamburger on mobile
    @media ((min-width: 320px) and (max-width: 1024px)) {
      // background: #000;
      padding: 0px 20px;
      display: block;
    }
  }

  .mobileContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ((min-width: 320px) and (max-width: 1024px)) {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 0 0.5rem;
  cursor: pointer;

  &.active {
    color: #fff;
    background: #023;
    border-radius: 10px;
    padding: 2px 20px;
  }

  @media ((min-width: 320px) and (max-width: 1024px)) {
    padding: 1.2rem 0rem;
    color: #fff;
    display: block;
  }
`;
