import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../helper/breakpoints";

const Container = styled.div`
  min-height: 100vh;
  background-color: #000; // CHANGE LATER
  color: #fff;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  > .content-wrapper {
    flex: 1;
  }

  ${(props) =>
    props.isBigTablet &&
    `
    margin-left: 86px;
  `}
  ${(props) =>
    props.isDesktop &&
    `
    margin-left: 320px;
  `}
`;

export const Wrapper = ({ children }) => {
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);
  return (
    <Container isBigTablet={isBigTablet} isDesktop={isDesktop}>
      {children}
    </Container>
  );
};
