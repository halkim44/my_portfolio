import React from "react";
import styled from "styled-components";
import {
  useNavbarActionsContext,
  useNavbarContext,
} from "../context/NavbarContext";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";
import { SocialMedia } from "./SocialMedia";

export const navbarWidth = "60px";
export const navbarHeight = "45px";

const TopMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: ${navbarHeight};
  padding: 0 25px;
  justify-content: space-between;

  ${(props) =>
    props.isTablet &&
    `
    width: ${navbarWidth};
    flex-direction: column;
    justify-content: flex-start;
    right: auto;
    bottom: 0;
    height: 100vh;
    background: #181818;
    padding: 0; //TEMPORARY
  `}
  > *:first-child {
  }
  > *:last-child {
    flex: 2;
  }
`;
const Hamburger = styled.div`
  margin: -4px 0;
`;

const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: #ecf0f1;
  display: block;
  margin: 4px auto;
`;

export const Navbar = () => {
  const isNavbarOpen = useNavbarContext();
  const setNavbar = useNavbarActionsContext();

  const isTablet = useMediaQuery(BreakPoints.tablet);

  const toggleNav = () => {
    setNavbar(!isNavbarOpen);
  };
  return (
    <TopMenu isTablet={isTablet}>
      <Logo />
      {!isTablet && (
        <Hamburger onClick={toggleNav}>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Hamburger>
      )}
      <NavMenu isActive={isNavbarOpen}>
        <SocialMedia />
      </NavMenu>
    </TopMenu>
  );
};
