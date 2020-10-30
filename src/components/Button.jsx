import React from "react";
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  background: none;
  font-size: 1em;
  color: #fffcf7;
  border: 2px solid #ffd801;
  border-radius: 50px;
  padding: 14px 36px;
  cursor: pointer;
  &:hover {
    color: #49492d;
    background-color: #ffd801;
  }

  ${(props) =>
    props.isFormButton &&
    `
    border: 2px solid #000;
    border-radius: 0;
    font-weight: 700;
    letter-spacing: .4em;

    &:hover {
      color: #ffd801;
      background-color: #000;
    }
  `}

  ${(props) =>
    props.size === 2 &&
    `
    font-size: .86em;
    padding: 6px 18px;
  `}
`;

export const Button = ({ text, linkTo, type, size, createNewTab }) =>
  type === "submit" ? (
    <ButtonStyled type={type} isFormButton size={size}>
      {text}
    </ButtonStyled>
  ) : (
    <a href={linkTo} target={createNewTab ? "_blank" : ""}>
      <ButtonStyled size={size}>{text}</ButtonStyled>
    </a>
  );
