import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { Hero } from "./pageSections/Hero";
import { BreakPoints } from "../helper/breakpoints";
import { Contact } from "./pageSections/Contact";
import { Projects } from "./pageSections/Projects";
import { About } from "./pageSections/About";
import { PageSections } from "../helper/PageSections";

const Section = styled.section`
  display: flex;
  margin-bottom: 36px;
  > * {
    flex: 1;
  }
  > div {
    padding: 16px;
  }
  ${(props) =>
    props.isTablet &&
    `
    margin-bottom: 64px;
    > div {
      padding: 16px 46px;
    }
  `}

  ${(props) =>
    props.isDesktop &&
    `
    > div {
      padding: 26px 84px;
      padding-right: 120px;
    }
  `}
`;

const Main = styled.main`
  flex: 1;
`;
const SectionElement = {
  home: <Hero />,
  projects: <Projects />,
  about: <About />,
  contact: <Contact />,
};

export const MainContent = () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <Main>
      {PageSections.map((section, i) => (
        <Section id={section} isTablet={isTablet} isDesktop={isDesktop} key={i}>
          {SectionElement[section]}
        </Section>
      ))}
    </Main>
  );
};
