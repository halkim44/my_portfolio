import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { BreakPoints } from "../../helper/breakpoints";

const NavWrapper = styled.div`
  margin-top: 86px;
  padding-left: 26px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  font-weight: 800;
  ul {
    margin-bottom: -80px;
  }
`;

const NavContainer = styled.div`
  background-color: #000;
  position: fixed;
  top: 0;
  ${(props) =>
    props.isTablet
      ? `
    width: 320px;
  z-index: 4;

  `
      : `
    width: 100%;
  `}
  left: -100%;
  bottom: 0;
  transition: left 0.4s;
  ${(props) =>
    props.isActive &&
    `
    left: 0;
  `}
`;

const NavItem = styled.li`
  font-size: 1.8em;
  font-weight: 700;
  margin: 8px 0;
`;

export const NavMenu = ({ isActive, navOpenToggler }) => {
  const isTablet = useMediaQuery(BreakPoints.tablet);

  return (
    <NavContainer isActive={isActive} isTablet={isTablet}>
      <NavWrapper>
        <Nav>
          <ul>
            <NavItem onClick={navOpenToggler}>
              <a href="#home">Home</a>
            </NavItem>
            <NavItem onClick={navOpenToggler}>
              <a href="#projects">Projects</a>
            </NavItem>
            <NavItem onClick={navOpenToggler}>
              <a href="#about">About</a>
            </NavItem>
            <NavItem onClick={navOpenToggler}>
              <a href="#contact">Contact</a>
            </NavItem>
          </ul>
        </Nav>
      </NavWrapper>
    </NavContainer>
  );
};
