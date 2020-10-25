import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../../helper/breakpoints";

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 32px;
  ${(props) =>
    props.isTablet &&
    `
    grid-template-columns: 1fr 1fr;
  `}
  ${(props) =>
    props.isBigTablet &&
    `
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const ProjectItem = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: #ffd801;
`;

export const Projects = () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);

  return (
    <div>
      <h2>Projects</h2>
      <ProjectGrid isTablet={isTablet} isBigTablet={isBigTablet}>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
      </ProjectGrid>
    </div>
  );
};
