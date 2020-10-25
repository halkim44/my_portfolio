import React from "react";
import styled from "styled-components";
import { Hero } from "./pageSections/Hero";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";
import { Contact } from "./pageSections/Contact";
import { Projects } from "./pageSections/Projects";
import { About } from "./pageSections/About";

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
export const MainContent = () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <Main>
      <Section id="home" isTablet={isTablet} isDesktop={isDesktop}>
        <Hero />
      </Section>
      <Section id="projects" isTablet={isTablet} isDesktop={isDesktop}>
        <Projects />
      </Section>
      <Section id="about" isTablet={isTablet} isDesktop={isDesktop}>
        <About />
      </Section>
      <Section id="contact" isTablet={isTablet} isDesktop={isDesktop}>
        <Contact />
      </Section>
    </Main>
  );
};
