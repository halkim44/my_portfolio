import React from 'react';
import {ReactComponent as TwiiterIcon} from '../icons/twitter-square.svg';
import {ReactComponent as LinkedInIcon} from '../icons/linkedin.svg';
import {ReactComponent as GithubIcon} from '../icons/github.svg';
import {ReactComponent as MailtoIcon} from '../icons/at-sign.svg';
import styled from 'styled-components';

const SocialMediaStyled = styled.div`
  padding-bottom: 6px;
`;

const NavLink = styled.li`
  text-align: center;
  margin-bottom: 8px;
    svg {
      fill: #333;
      width: 20px;
      height: 20px;
      &:hover {
        fill: yellow;
      }
    }
`;




export const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <ul>
        <NavLink>
          <a href="/twitter">
            <TwiiterIcon />
          </a>
        </NavLink>
        <NavLink>
          <a href="/in">
            <LinkedInIcon />
          </a>
        </NavLink>
        <NavLink>
          <a href="/github">
            <GithubIcon />
          </a>
        </NavLink>
        <NavLink>
          <a href="/mailto">
            <MailtoIcon />
          </a>
        </NavLink>
      </ul>
    </SocialMediaStyled>
  )
}