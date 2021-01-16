import React, { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../../helper/breakpoints";
import { ProjectDetail } from "../ProjectDetail";
import { ProjectsData } from "../../helper/ProjectsData";
import { Button } from "../Button";

const Container = styled.div``;

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
  ${({ projectnum }) => `
  background: url(img/project-0${projectnum}01.png);
  `}
  background-size: auto 100%;
  background-position: center;
  cursor: pointer;
  transition: background-size 0.3s;
  &:hover {
    background-size: auto 115%;
  }
`;

const ViewMoreWrapper = styled.div`
  text-align: center;
  margin-top: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isTablet }) =>
    !isTablet &&
    `
  flex-direction: column;
  p {
    margin-bottom: 24px;
  }
  `}

  button {
    margin-left: 12px;
    background: #ffd801;
    color: #49492d;
  }
`;

export const Projects = () => {
  const [projectToDisplay, setProjectToDisplay] = useState(null);
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);

  const projectItems = [];

  for (let i = 0; i < ProjectsData.length; i++) {
    projectItems.push(
      <ProjectItem
        projectNumber={i}
        key={i}
        onClick={(e) => setProjectToDisplay(i)}
        projectnum={i}
      />
    );
  }
  return (
    <Container>
      {projectToDisplay == null ? (
        <>
          <h2>Projects</h2>

          <ProjectGrid isTablet={isTablet} isBigTablet={isBigTablet}>
            {projectItems}
          </ProjectGrid>
        </>
      ) : (
        <>
          {console.log(projectToDisplay)}
          <ProjectDetail
            exitFunction={() => setProjectToDisplay(null)}
            project={ProjectsData[projectToDisplay]}
          />
        </>
      )}

      <ViewMoreWrapper isTablet={isTablet}>
        <p>You can find more on my Github. </p>
        <Button
          text="Go to Github"
          linkTo="https://github.com/halkim44"
          createNewTab
        />
      </ViewMoreWrapper>
    </Container>
  );
};
