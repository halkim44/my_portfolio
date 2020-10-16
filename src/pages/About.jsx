import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { PageContainer } from "../components/PageContainer";
import { BreakPoints } from "../helper/breakpoints";

const AboutContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 32px;

  ${(props) =>
    props.isDesktop &&
    `
      flex-direction: row;
      justify-content: space-around;
    `}
`;

const AboutTextContainer = styled.div`
  margin-bottom: 32px;
  ${(props) =>
    props.isDesktop &&
    `
    text-align: left;
    max-width: 660px;
    margin-bottom: 0;
    margin-right: 32px;
  `}
`;
const ProfilePicWrapper = styled.div`
  width: 260px;
  height: 300px;
  background-color: #ffd801;
  margin-bottom: 64px;
`;

export default () => {
  const isTablet = useMediaQuery(BreakPoints.tablet);
  const isDesktop = useMediaQuery(BreakPoints.desktop);

  return (
    <PageContainer>
      <AboutContentWrapper isTablet={isTablet} isDesktop={isDesktop}>
        <AboutTextContainer isDesktop={isDesktop}>
          <h2>About</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima at
            voluptates illo, culpa rerum nesciunt alias fugiat ut adipisci modi
            aliquam, in dolores labore! Ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cumque illo consequuntur aperiam libero, perspiciatis harum ab
            corporis quia reiciendis tempora! Illo magni laudantium nisi. Qui
            non voluptatum placeat delectus dolorum consequuntur vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            officia nulla placeat error. Eaque voluptas, doloribus delectus
            obcaecati deleniti soluta expedita explicabo possimus nesciunt
            excepturi saepe iure porro nisi aperiam quibusdam aliquid. Ipsam
            corporis molestiae perferendis laboriosam blanditiis eum itaque?
          </p>
        </AboutTextContainer>
        <div>
          <ProfilePicWrapper></ProfilePicWrapper>
        </div>
      </AboutContentWrapper>
    </PageContainer>
  );
};
