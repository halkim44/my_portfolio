import React from "react";
import styled from "styled-components";

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
          <Content>Junior Front-End Developer (React.js)</Content>
        </InfoListItem>
        <InfoListItem>
          <Title>EMAIL</Title>
          <Content>halkimrajan@gmail.com</Content>
        </InfoListItem>
        <InfoListItem>
          <Title>NUMBER</Title>
          <Content>+6011 - 1415 3341</Content>
        </InfoListItem>
      </ul>
    </MyInfoContainer>
  );
};
