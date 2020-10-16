import React from "react";
import styled from "styled-components";

import { ReactComponent as GitIcon } from "../icons/git.svg";
import { ReactComponent as NodejsIcon } from "../icons/node-dot-js.svg";
import { ReactComponent as HtmlIcon } from "../icons/html5.svg";
import { ReactComponent as CssIcon } from "../icons/css3.svg";
import { ReactComponent as JsIcon } from "../icons/javascript.svg";
import { ReactComponent as JestIcon } from "../icons/jest.svg";
import { ReactComponent as SassIcon } from "../icons/sass.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as ReduxIcon } from "../icons/redux.svg";
import { PageContainer } from "../components/PageContainer";

const ContentText = styled.div`
  p {
    line-height: 1.6em;
  }
`;

const IconWrapper = styled.span`
  margin-right: 16px;
  height: 1em;
  font-size: 1.6em;
  > svg {
    height: 1em;
    width: 1em;
  }
`;

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 26px 12px;
  font-size: 1.1em;
  user-select: none;

  &:hover {
    span {
      margin-right: 20px;
    }
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const SkillsTools = styled.div`
  flex: 3;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default () => {
  return (
    <PageContainer>
      <ContentText>
        <h2>Skills</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quis a
          sapiente adipisci earum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dolor voluptatum repellat harum, aliquam modi ut nisi eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          atque fugiat possimus laborum quod odit voluptate repudiandae porro
          iure culpa. Dignissimos.
        </p>
      </ContentText>

      <SkillsTools>
        <h2>Tools I used</h2>
        <List>
          <ListItemWrapper>
            <IconWrapper>
              {" "}
              <GitIcon />{" "}
            </IconWrapper>
            <span>Git</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              {" "}
              <NodejsIcon />{" "}
            </IconWrapper>
            <span>Node.js</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <HtmlIcon />
            </IconWrapper>
            <span>HTML5</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <CssIcon />
            </IconWrapper>
            <span>CSS3</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <JsIcon />
            </IconWrapper>
            <span>Javascript</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <SassIcon />
            </IconWrapper>
            <span>Sass</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <ReactIcon />
            </IconWrapper>
            <span>React</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <ReduxIcon />
            </IconWrapper>
            <span>Redux</span>
          </ListItemWrapper>
          <ListItemWrapper>
            <IconWrapper>
              <JestIcon />
            </IconWrapper>
            <span>Jest</span>
          </ListItemWrapper>
        </List>
      </SkillsTools>
    </PageContainer>
  );
};
