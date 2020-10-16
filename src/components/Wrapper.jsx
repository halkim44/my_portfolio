import { usePath } from "hookrouter";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavbarActionsContext } from "../context/NavbarContext";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";
import { navbarHeight, navbarWidth } from "./Navbar";

const Container = styled.div`
  min-height: 100vh;
  background-color: #1f1f1f;
  color: #fff;
  overflow: auto;
  box-sizing: border-box;

  ${(props) =>
    props.isTablet &&
    `
    padding-left: ${navbarWidth};
  `}
  ${(props) =>
    !props.isTablet &&
    `
    padding-top: ${navbarHeight};
  `}

  display: flex;
  > .content-wrapper {
    flex: 1;
  }
`;

export const Wrapper = ({ children }) => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const currentPath = usePath();
  const setNavbar = useNavbarActionsContext();
  useEffect(() => {
    // this will fire when route is changed
    setNavbar(false);
  }, [currentPath, setNavbar]);
  return <Container isTablet={isTablet}>{children}</Container>;
};
