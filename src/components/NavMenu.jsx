import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import {ReactComponent as HomeIcon} from '../icons/home.svg';
import {ReactComponent as CodeIcon} from '../icons/code.svg';
import {ReactComponent as UserIcon} from '../icons/user.svg';
import {ReactComponent as SkillsIcon} from '../icons/settings.svg';
import {ReactComponent as MailIcon} from '../icons/mail.svg';
import { useNavbarActionsContext } from '../context/NavbarContext';
import { A, usePath } from 'hookrouter';
import { BreakPoints } from '../helper/breakpoints';

const NavLink = styled.li`
margin: 0;
margin-bottom: 36px;
text-align: center;
svg {
  fill: #444;
  &:hover {
    fill: yellow;
  }
}
${props => props.isCurrentPage && `
  svg {
    fill: #FFD801;
  }
`}
`;

const Nav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
ul {
  margin-bottom: -80px;
}
`;

const NavExit = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
`

const NavContainer = styled.div`

  width: 56px;
  display: flex;
  flex-direction: column;

  ${props => props.isTablet && `
    background: #181818;
    position: absolute;
    top: 0;
    z-index: 3;
    right: -56px;
    transition: right .2s ease-out;
    height: 100vh;
  `
  }
  
  ${props => props.isActive && `
    right: 0;
  `}
`;

export const NavMenu = ({isActive, children}) => {

  const setNavbar = useNavbarActionsContext();
  const isTablet = useMediaQuery(BreakPoints.tablet.max);

  const currentPage = usePath();
  
  return (
    <>
      {isActive ? <NavExit onClick={() => setNavbar(false)}></NavExit> : ""}      
      <NavContainer isActive={isActive} isTablet={isTablet}>
        <Nav>
          <ul>
            <NavLink isCurrentPage={currentPage === "/"}>
              <A href="/">
                <HomeIcon />
              </A>
            </NavLink>
            <NavLink isCurrentPage={currentPage === "/about"}>
              <A href="/about">
                <UserIcon />
              </A>
            </NavLink>
            <NavLink isCurrentPage={currentPage === "/skills"}>
              <A href="/skills">
                <SkillsIcon />
              </A>
            </NavLink>
            <NavLink isCurrentPage={currentPage === "/projects"}>
              <A href="/projects">
                <CodeIcon />
                </A>
            </NavLink>
            <NavLink isCurrentPage={currentPage === "/contact"}>
              <A href="/contact">
                <MailIcon />
              </A>
            </NavLink>
          </ul>
        </Nav>
        {children } {/* aditional components or social media links components */}
      </NavContainer>
    </>
  )
}