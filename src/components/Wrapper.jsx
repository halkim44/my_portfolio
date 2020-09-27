import { usePath } from 'hookrouter';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavbarActionsContext } from '../context/NavbarContext';
import { useMediaQuery } from 'react-responsive';
import { BreakPoints } from '../helper/breakpoints';
import { navbarHeight, navbarWidth } from './Navbar';

const Container = styled.div`
  min-height: 100vh;
  background-color: #1f1f1f;
  color: #fff;
  overflow: auto;
  
  ${props => props.isDesktop && `
    padding-left: ${navbarWidth}
  `}
  ${props => !props.isDesktop && `
    padding-top: ${navbarHeight}
  `}

`;

export const Wrapper = ({ children }) => {
  const isDesktop = useMediaQuery(BreakPoints.desktop.min);
  const currentPath = usePath();
  const setNavbar = useNavbarActionsContext();
  useEffect(() => {
    // this will fire when route is changed
    setNavbar(false);
  }, [currentPath, setNavbar])
  return (
    <Container isDesktop={isDesktop}>
      {children}
    </Container>
  )
}