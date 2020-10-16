import { A } from "hookrouter";
import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: none;
  font-size: 1em;
  color: #ffd801;
  border: 1px solid #ffd801;
  padding: 8px 14px;
  letter-spacing: 0.15em;
  &:hover {
    background-color: #ffd801;
    color: #000;
  }
`;

export const Button = ({ text, linkTo, type }) =>
  type === "submit" ? (
    <ButtonStyled type={type}>{text}</ButtonStyled>
  ) : (
    <A href={linkTo}>
      <ButtonStyled>{text}</ButtonStyled>
    </A>
  );
