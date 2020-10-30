import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { BreakPoints } from "../../helper/breakpoints";
import { PageSections } from "../../helper/PageSections";

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
  text-transform: capitalize;
`;

export const NavMenu = ({ isActive, navOpenToggler }) => {
  const isTablet = useMediaQuery(BreakPoints.tablet);

  return (
    <NavContainer isActive={isActive} isTablet={isTablet}>
      <NavWrapper>
        <Nav>
          <ul>
            {PageSections.map((section, i) => (
              <NavItem onClick={navOpenToggler} key={"nav-item-" + i}>
                <a href={"#" + section}>{section}</a>
              </NavItem>
            ))}
          </ul>
        </Nav>
      </NavWrapper>
    </NavContainer>
  );
};
