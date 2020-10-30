import React, { useState } from "react";
import styled from "@emotion/styled";

const Slider = styled.div`
  overflow: hidden;
`;

const SliderItemsContainer = styled.div`
  display: flex;
  width: ${(props) => props.itemLength * 100}%;
  position: relative;
  transition: left 0.6s;
  left: ${({ numOfSwipes }) => (numOfSwipes ? `-${numOfSwipes}00%` : "0")};
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
`;
const Dot = styled.span`
  height: 16px;
  width: 16px;
  margin: 0 2px;
  border-radius: 100%;
  display: block;
  background-color: #333;
  transition: background-color 0.4s;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
  background-color: #ffd801;
  `}
`;

const ImgWrapper = styled.div`
  width: 100%;
  > img {
    width: 100%;
  }
`;
export const Carousel = ({ pictures }) => {
  const [numOfSwipes, setNumOfSwipes] = useState(0);

  const setNumOfSwipesCond = (num) => {
    if (num >= 0 && num < pictures.length) {
      setNumOfSwipes(num);
    }
  };

  // swipe event functions START
  let x0 = null;
  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

  const lock = (e) => {
    x0 = unify(e).clientX;
    console.log(x0);
  };

  const move = (e) => {
    let dx = unify(e).clientX;

    if (Math.abs(dx - x0) >= 80) {
      if (dx > x0) {
        setNumOfSwipesCond(numOfSwipes - 1);
      } else {
        setNumOfSwipesCond(numOfSwipes + 1);
      }
    }
    console.log(Math.abs(dx - x0));
    x0 = null;
  };

  document.querySelector("img").ondragstart = () => {
    return false;
  };
  // Swipe event functions END
  return (
    <div>
      <Slider>
        <SliderItemsContainer
          itemLength={pictures.length}
          numOfSwipes={numOfSwipes}
          onTouchStart={lock}
          onTouchEnd={move}
        >
          {pictures.map((pic, i) => (
            <ImgWrapper key={i}>
              <img
                src={"img/" + pic}
                alt={"project photo " + 1}
                key={"img-" + i}
              />
            </ImgWrapper>
          ))}
        </SliderItemsContainer>
      </Slider>
      <Dots>
        {pictures.map((p, i) => (
          <Dot
            onClick={() => setNumOfSwipesCond(i)}
            isActive={i === numOfSwipes}
            key={"dot-" + i}
          />
        ))}
      </Dots>
    </div>
  );
};
