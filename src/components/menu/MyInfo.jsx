import React from "react";
import styled from "@emotion/styled";

const MyInfoContainer = styled.div`
  margin-top: 40px;
  font-size: 0.9em;
  margin-left: 28px;
`;
const Title = styled.span`
  color: #ffd801;
  letter-spacing: 0.2em;
  margin-bottom: 4px;
`;

const InfoListItem = styled.div`
  margin-bottom: 28px;
  > span {
    display: block;
  }
`;
export const EmailLink = styled.a`
  &:hover {
    border-bottom: 2px solid #ffd801;
  }
`;
const Content = styled.span``;
export const MyInfo = () => {
  return (
    <MyInfoContainer>
      <ul>
        <InfoListItem>
          <Title>NAME</Title>
          <Content>Halkim Bin Rajan</Content>
        </InfoListItem>
        <InfoListItem>
          <Title>ROLE</Title>
          <Content>Full Stack JavaScript Developer (React.js)</Content>
        </InfoListItem>
        <InfoListItem>
          <Title>EMAIL</Title>
          <EmailLink href="mailto:halkimrajan@gmail.com">
            <Content>halkimrajan@gmail.com</Content>
          </EmailLink>
        </InfoListItem>
        <InfoListItem></InfoListItem>
      </ul>
    </MyInfoContainer>
  );
};
