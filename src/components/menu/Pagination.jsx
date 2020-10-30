import React from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { BreakPoints } from "../../helper/breakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
  ${(props) =>
    props.isBigTablet &&
    `
    flex-direction: column;
    z-index: 5;
  `}

  ${(props) =>
    props.isDesktop &&
    `
    z-index: 3;
    flex-direction: row;
    margin: 60px 0;
    margin-left: 28px;

  `}

  > span {
    font-weight: 700;
  }
`;

const ProgressBar = styled.div`
  width: 100px;
  height: 3px;
  background-color: #fff;
  margin: 0 12px;
  margin-top: -1px;
  ${(props) =>
    props.isBigTablet &&
    !props.isDesktop &&
    `
    width: 3px;
    height: 100px;
    margin: 12px 0;
  `}
`;

const CurrentPage = styled.span`
  color: #ffd801;
`;
export const Pagination = () => {
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <Container isBigTablet={isBigTablet} isDesktop={isDesktop}>
      <CurrentPage>00</CurrentPage>
      <ProgressBar isBigTablet={isBigTablet} isDesktop={isDesktop} />
      <span>04</span>
    </Container>
  );
};
