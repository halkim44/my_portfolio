import React from "react";
import styled from "@emotion/styled";
import { Button } from "../Button";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../../helper/breakpoints";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.isTablet &&
    `
    margin-top: 0;
    height: 100vh;
    position: relative;
    align-items: center;
    flex-direction: row;
    font-size: 1.1em;
    padding-top: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
  `}
`;

const Greetings = styled.p`
  font-size: 1.22em;
  color: #ccc;
  ${(props) =>
    props.isTablet &&
    `
    font-size: 1.6em;
  `}
`;

const MyName = styled.h1`
  color: #ffd801;
  font-size: 3.2em;
  font-weight: 800;
  line-height: 1em;
  margin: 42px 0;
  ${(props) =>
    props.isTablet &&
    `
    font-size: 5.2em;
  `}
`;
const Info = styled.p`
  line-height: 2em;
  margin-bottom: 32px;
`;
const Content = styled.div`
  padding: 26px 0;
  background: #000;
  z-index: 1;
  ${(props) =>
    props.isTablet &&
    `
    width: 466px;
  `}
`;
const BackgroundPhoto = styled.div`
  background: linear-gradient(
      90deg,
      #000 2px,
      rgba(0, 0, 0, 0.8) 45%,
      rgba(0, 0, 0, 0.4)
    ),
    url("img/code-background.webp");
  background-size: cover;
  background-position: 0, right -300px top;
  width: 50%;
  flex: 1;
  height: 100%;
  position: relative;
  &:after {
    // a fix for covering the small gap created on left side of the gradient that appear when the app is in a certain zoom position
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    left: -2px;
    background: #000;
  }
`;
export const Hero = () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  return (
    <Container isTablet={isTablet}>
      <Content isTablet={isTablet}>
        <Greetings isTablet={isTablet}>Hello. My name is</Greetings>

        <MyName isTablet={isTablet}>
          <span>Halkim</span> Rajan
        </MyName>
        <Info>
          A Self-taught Full Stack JavaScript developer from W.P. Labuan,
          Malaysia.
        </Info>
        <Button text="Contact Me" linkTo="#contact" blackText />
      </Content>

      {isTablet && <BackgroundPhoto></BackgroundPhoto>}
    </Container>
  );
};
