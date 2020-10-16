import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";
import { PageContainer } from "../components/PageContainer";

const HeroWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  ${(props) =>
    props.isTablet &&
    `
    margin: 0 64px;
  `}
`;

const Hero = styled.div`
  ${(props) =>
    !props.isTablet &&
    `
    margin-top: -160px;
  `}
  font-size: 1em;
  flex: 1;
  ${(props) =>
    props.isTablet &&
    `
    text-align: left;
    font-size: 2.2em;
    margin-right: 40px;
  `}
`;

const HeroIntroText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 2em;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 34px;
  font-size: 0.8em;
`;

const MiniIntroText = styled.span`
  font-size: 0.9em;
  color: #4c4c4c;
  display: block;
  margin-top: 4px;
`;

const MyName = styled.span`
  color: #ffd801;
`;
const Contoh = styled.div`
  height: 500px;
  color: black;
  flex: 1;
  background-color: #ffd801;
`;

export default () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <PageContainer>
      <HeroWrapper isTablet={isTablet}>
        <Hero isTablet={isTablet}>
          <HeroIntroText>
            Hi, <br />
            I'm <MyName>Halkim</MyName> <br />
            Web Developer
          </HeroIntroText>

          <MiniIntroText>Front End / React Developer</MiniIntroText>
          <ButtonWrapper>
            <Button text="Contact me" linkTo="/contact" />
          </ButtonWrapper>
        </Hero>
        {isDesktop && <Contoh></Contoh>}
      </HeroWrapper>
    </PageContainer>
  );
};
