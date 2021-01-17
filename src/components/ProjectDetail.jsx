import React from "react";
import styled from "@emotion/styled";
import { Button } from "./Button";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";
import { Carousel } from "./carousel";

const GoBackBtnWrapper = styled.div`
  margin-bottom: 12px;
  padding: 6px 0;
`;
const GoBackBtn = styled.button`
  color: inherit;
  background-color: transparent;
  padding: 0;
  border: none;
  font-size: 1.2em;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: #ffd801;
  }
`;

const Pill = styled.span`
  font-size: 0.83em;
  color: #fffcf7;
  opacity: 0.8;
  &:hover {
    text-decoration: underline;
  }
`;
const PillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
`;
const PillListItem = styled.li`
  margin: 5px 3px;
`;
const Description = styled.p`
  margin-bottom: 14px;
`;
const ButtonContainer = styled.div`
  > *:first-of-type {
    margin-right: 8px;
  }
`;
const ProjectInfoWrapper = styled.div`
  ${({ isDesktop }) =>
    isDesktop &&
    `
    margin-right: 24px;
`}
`;
const CarouselWrapper = styled.div``;
const Content = styled.div`
  ${({ isDesktop }) =>
    isDesktop &&
    `
  display: flex;
  flex-direction: row-reverse;
  > * {
    flex: 1;
  }
  `}
`;

const Container = styled.div`
  position: relative;
`;

export const ProjectDetail = ({ exitFunction, project }) => {
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <Container>
      <GoBackBtnWrapper>
        <GoBackBtn onClick={exitFunction}>Go back</GoBackBtn>
      </GoBackBtnWrapper>
      <Content isDesktop={isDesktop}>
        <CarouselWrapper>
          <Carousel pictures={project.screenshot} />
        </CarouselWrapper>
        <ProjectInfoWrapper isDesktop={isDesktop}>
          <h2>{project.name}</h2>

          <PillList>
            {project.tools.map((tool, i) => (
              <PillListItem key={i}>
                <Pill>
                  {tool}
                  {i + 1 !== project.tools.length && " , "}
                </Pill>
              </PillListItem>
            ))}
          </PillList>

          <Description>{project.description}</Description>
          <ButtonContainer>
            <Button
              text="Live"
              linkTo={project.liveLink}
              size={2}
              createNewTab
            />
            <Button
              text="Code"
              linkTo={project.codeLink}
              size={2}
              createNewTab
            />
          </ButtonContainer>
        </ProjectInfoWrapper>
      </Content>
    </Container>
  );
};
