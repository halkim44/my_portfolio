import React from "react";
import styled from "@emotion/styled";

const Bar = styled.div`
  padding: 6px 8px;
  margin: 6px 0;
  background-color: #ffd801;
  font-weight: 800;
  color: #000;
  ${(props) => `
   width: ${props.percentage}%;
  `}
`;
const Header = styled.h3`
  margin: 26px 0 6px;
  color: #ffd801;
`;

export const Skills = () => {
  return (
    <div>
      <Header>Coding Skills</Header>
      <Bar percentage="90">
        <span>HTML</span>
      </Bar>
      <Bar percentage="87">
        <span>CSS</span>
      </Bar>
      <Bar percentage="84">
        <span>JS</span>
      </Bar>

      <Bar percentage="72">
        <span>REACT</span>
      </Bar>
      <Bar percentage="47">
        <span>JEST</span>
      </Bar>
      <Bar percentage="68">
        <span>NODE.JS</span>
      </Bar>
      <Bar percentage="54">
        <span>MONGODB</span>
      </Bar>
      <Bar percentage="45">
        <span>REDUX</span>
      </Bar>
      <Bar percentage="64">
        <span>SASS</span>
      </Bar>
    </div>
  );
};
