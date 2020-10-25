import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { BreakPoints } from "../helper/breakpoints";
import { Button } from "./Button";

const Container = styled.div`
  background-color: #ffd801;
  padding: 22px;
  ${(props) =>
    props.isTablet &&
    `
    padding: 46px 66px;
  `}
`;

const InputContainer = styled.div`
  margin-bottom: 18px;
  > input,
  > textarea {
    width: 100%;
    color: #000;
    border-bottom: 2px solid #000;
    padding-bottom: 8px;
    &::placeholder {
      color: inherit;
    }
  }
  > button {
    color: #000;
    width: 100%;
  }
`;

export const ContactForm = () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);

  return (
    <Container isTablet={isTablet}>
      <form>
        <InputContainer>
          <input type="text" name="user-name" id="name" placeholder="Name" />
        </InputContainer>
        <InputContainer>
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            name="subject"
            id="user-subject"
            placeholder="Subject"
          />
        </InputContainer>
        <InputContainer>
          <textarea placeholder="Message" rows="8"></textarea>
        </InputContainer>
        <InputContainer>
          <Button type="submit" text="SEND">
            SEND
          </Button>
        </InputContainer>
      </form>
    </Container>
  );
};
