import React from "react";
import styled from "@emotion/styled";
import { ContactForm } from "../ContactForm";

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  > h2 {
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 16px 0;
  font-size: 1.2em;
`;
const EmailLink = styled.a`
  font-weight: 700;
  &:hover {
    border-bottom: 2px solid #ffd801;
  }
`;
export const Contact = () => {
  return (
    <Container>
      <h2>Get In Touch</h2>
      <Text>
        Let's talk! Please don't hesitate to&nbsp;
        <EmailLink href="mailto:halkimrajan@gmail.com">
          send me an email
        </EmailLink>
        &nbsp;or get in touch using the form below:
      </Text>
      <ContactForm />
    </Container>
  );
};
