import React from 'react';
import styled from 'styled-components';

const FullscreenWrapper = styled.div`
  height: 100vh;
  background-color: #3243;
`;

export const Wrapper = ({ children }) => {
  return (
    <FullscreenWrapper>
      {children}
    </FullscreenWrapper>
  )
}