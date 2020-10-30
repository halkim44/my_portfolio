import React, { useState } from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateState = (e) => {
    const newData = {};
    newData[e.target.name] = e.target.value;

    console.log(checkForm(formData));
    console.log({ ...formData, ...newData });
    setFormData({ ...formData, ...newData });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const checkForm = (obj) => {
    for (var key in obj) {
      console.log(key);
      if (obj[key] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkForm(formData)) {
      axios({
        method: "POST",
        url: "http://localhost:3002/send",
        data: formData,
      }).then((response) => {
        if (response.data.status === "success") {
          resetForm();
          alert("Message Sent.");
        } else if (response.data.status === "fail") {
          alert("message failed to send.");
        }
      });
    } else {
      alert("form is not complete. Message not sent.");
    }
  };

  return (
    <Container isTablet={isTablet}>
      <form
        onSubmit={handleSubmit}
        id="contact-form"
        method="POST"
        autoComplete="off"
      >
        <InputContainer>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={updateState}
            autoCapitalize="words"
          />
        </InputContainer>
        <InputContainer>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={updateState}
            required
          />
        </InputContainer>
        <InputContainer>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={updateState}
          />
        </InputContainer>
        <InputContainer>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={updateState}
            value={formData.message}
            rows="8"
          ></textarea>
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
