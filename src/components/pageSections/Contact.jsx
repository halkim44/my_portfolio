import React from "react";
import styled from "styled-components";
import { ContactForm } from "../ContactForm";

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  > h2 {
    text-align: center;
  }
`;

export const Contact = () => {
  return (
    <Container>
      <h2>Get In Touch</h2>
      <ContactForm />
    </Container>
  );
};
