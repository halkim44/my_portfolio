import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { PageContainer } from "../components/PageContainer";

const FormStyled = styled.div`
  width: 100%;
  font-size: 1em;
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    color: #8c8c8c;
    background-color: #2b2b2b;
    border: none;
    padding: 0 12px;
    margin-bottom: 12px;
  }
  input {
    line-height: 40px;
  }
  textarea {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const ContactPage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ContactForm = styled.div`
  margin: 60px 0;
  max-width: ;
`;

const NameEmailFormContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12px;
  > input {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  > * {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

export default () => {
  return (
    <PageContainer>
      <ContactPage>
        <ContactForm>
          <h2>Contact</h2>

          <FormStyled>
            <form>
              <NameEmailFormContainer>
                <input type="text" name="name" placeholder="Your name" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
              </NameEmailFormContainer>
              <InputContainer>
                <input type="text" name="subject" placeholder="subject" />
              </InputContainer>
              <InputContainer>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="8"
                ></textarea>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit" text="SEND" />
              </ButtonContainer>
            </form>
          </FormStyled>
        </ContactForm>
      </ContactPage>
    </PageContainer>
  );
};
