import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0 24px;
  flex: 1;
  display: flex;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const PageContainer = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);
