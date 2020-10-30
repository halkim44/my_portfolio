import React from "react";
import styled from "@emotion/styled";
import {
  useNavbarActionsContext,
  useNavbarContext,
} from "../../context/NavbarContext";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../../helper/breakpoints";
import { NavMenu } from "./NavMenu";
import { MyInfo } from "./MyInfo";

export const navbarWidth = "60px";
export const navbarHeight = "50px";

const MenuStyled = styled.div`
  background-color: #1e1e1e;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: ${navbarHeight};
  padding: 0 20px 6px;
  justify-content: space-between;
  z-index: 3;

  ${(props) =>
    props.isBigTablet
      ? `
    flex-direction: column;
    bottom: 0;
    height: auto;
    padding: 20px 0;
    width: 86px;
    `
      : `
    right: 0;
    `}
  ${(props) =>
    props.isDesktop &&
    `
    width: 320px;
    justify-content: left;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 32px;
    `}
`;
const Hamburger = styled.div`
  cursor: pointer;
  width: 30px;
  z-index: 5;
  > div {
    transition: transform 0.4s, opacity 0.2s;
    transform-origin: left;
    transform: rotate(0) translate(0);
  }
  > div:nth-of-type(2) {
    margin: 5px 0;
    width: 63%;
  }

  ${(props) =>
    props.isActive &&
    `
		>div:first-of-type {
			transform: rotate(45deg) translate(2px, -5px);
		}
		>div:nth-of-type(2) {
			opacity: 0;
		}
		>div:last-of-type {
    transform: rotate(-45deg) translate(1px, 5px);
		}
	`}
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #fff;
  display: block;
`;

const NavExit = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Logo = styled.span`
  font-weight: 700;
  margin-bottom: -4px;
  > span {
    color: #ffd801;
  }
  ${({ isDesktop }) =>
    isDesktop &&
    `
  font-size: 1.6em;
  display: block;
  margin-top: 64px;
  margin-left: 28px;
  
  `}
`;
export const Menu = () => {
  const isNavbarOpen = useNavbarContext();
  const setNavbar = useNavbarActionsContext();

  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  const navOpenToggler = () => {
    setNavbar(!isNavbarOpen);
  };
  return (
    <MenuStyled
      isTablet={isTablet}
      isBigTablet={isBigTablet}
      isDesktop={isDesktop}
    >
      <Hamburger onClick={navOpenToggler} isActive={isNavbarOpen}>
        <Line />
        <Line />
        <Line />
      </Hamburger>

      <Logo isDesktop={isDesktop}>
        Halkim<span>.</span>
      </Logo>

      <NavMenu isActive={isNavbarOpen} navOpenToggler={navOpenToggler} />
      {isTablet && isNavbarOpen && <NavExit onClick={navOpenToggler} />}

      {isDesktop && <MyInfo />}
    </MenuStyled>
  );
};
