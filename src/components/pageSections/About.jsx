import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { Skills } from "../Skills";
import { BreakPoints } from "../../helper/breakpoints";

const Container = styled.div`
  ${(props) =>
    props.isBigTablet &&
    `
  display: flex;
  
  `}
`;
const ProfilePicContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 500px;

  ${(props) =>
    props.isBigTablet &&
    `
    width: 480px;
    margin-top: 30px;
    margin-right: 52px;
  `}
`;
const ProfilePic = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
`;

const MyInfo = styled.p`
  margin-bottom: 26px;
`;

const MyPicture = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const About = () => {
  const isBigTablet = useMediaQuery(BreakPoints.bigTablet);

  return (
    <Container isBigTablet={isBigTablet}>
      <ProfilePicContainer isBigTablet={isBigTablet}>
        <ProfilePic>
          <MyPicture src="img/me.jpg" alt="halkim rajan" />
        </ProfilePic>
      </ProfilePicContainer>
      <div>
        <h2>About Me</h2>
        <MyInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque
          delectus dignissimos aspernatur repudiandae eligendi nam, assumenda
          quas, commodi similique praesentium tenetur. Dolorum amet labore quasi
          esse cum, error aut?
        </MyInfo>
        <Skills />
      </div>
    </Container>
  );
};
