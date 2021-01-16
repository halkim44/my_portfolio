import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Slider = styled.div`
  overflow: hidden;
`;

const SliderItemsContainer = styled.div`
  display: flex;
  width: ${(props) => props.itemLength * 100}%;
  position: relative;
  transition: left 0.6s ease, height 0.4s ease-out;
  left: ${({ pictureIndex }) => (pictureIndex ? `-${pictureIndex}00%` : "0")};
  ${({ sliderHeight }) => `
  height: ${sliderHeight}
  ;`}
  overflow: hidden;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  const [pictureIndex, setPictureIndex] = useState(0);
  const [sliderHeight, setsliderHeight] = useState("");

  useEffect(() => {
    setsliderHeight(
      document.querySelector(".img-" + pictureIndex).offsetHeight + "px"
    );
  }, [pictureIndex]);

  const setPictureIndexCond = (num) => {
    if (num >= 0 && num < pictures.length) {
      setPictureIndex(num);
      setsliderHeight(getCurrentImgHeight(pictureIndex));
    }
    console.log(sliderHeight);
  };

  const getCurrentImgHeight = (picId) => {
    return document.querySelector(".img-" + picId).offsetHeight + "px";
  };

  // swipe event functions START
  let x0 = null;
  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

  const lock = (e) => {
    x0 = unify(e).clientX;
  };

  const move = (e) => {
    let dx = unify(e).clientX;

    if (Math.abs(dx - x0) >= 80) {
      if (dx > x0) {
        setPictureIndexCond(pictureIndex - 1);
      } else {
        setPictureIndexCond(pictureIndex + 1);
      }
    }
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
          pictureIndex={pictureIndex}
          onTouchStart={lock}
          onTouchEnd={move}
          sliderHeight={sliderHeight}
        >
          {pictures.map((pic, i) => (
            <ImgWrapper key={i} className="img-wrapper">
              <img
                className={"img-" + i}
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
            onClick={() => setPictureIndexCond(i)}
            isActive={i === pictureIndex}
            key={"dot-" + i}
          />
        ))}
      </Dots>
    </div>
  );
};
