import React, { useEffect, useState } from "react";
import { ImgLoader } from "../imageLoader";
import { Dot, Dots, ImgWrapper, Slider, SliderItemsContainer } from "./styles";

export const Carousel = ({ pictures }) => {
  const [pictureIndex, setPictureIndex] = useState(0);
  const [sliderHeight, setsliderHeight] = useState("");

  const updateView = (num) => {
    console.log(num, pictureIndex);

    if (num >= 0 && num < pictures.length) {
      setPictureIndex(num);
      setsliderHeight(getCurrentImgHeight(num));
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
        updateView(pictureIndex - 1);
      } else {
        updateView(pictureIndex + 1);
      }
    }
    x0 = null;
  };

  document.querySelector("img").ondragstart = () => {
    return false;
  };
  // Swipe event functions END

  useEffect(() => {
    // fix the slider initial height unchanged problem
    // const firstImgDOM = document.querySelector(".img-0");
    // firstImgDOM.onload = (e) => {
    // setsliderHeight(firstImgDOM.offsetHeight + "px");
    // setsliderHeight(getCurrentImgHeight(0));
    // };
  }, []);

  useEffect(() => {
    // setsliderHeight(
    // document.querySelector(".img-" + pictureIndex).offsetHeight + "px"
    // );
  }, []);
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
              <ImgLoader
                className={"img-" + i + " carousel-img"}
                src={"img/" + pic}
                alt={"project photo " + 1}
                finishLoadingCallback={() => {
                  if (i === 0) {
                    updateView(0);
                  }
                }}
              />
            </ImgWrapper>
          ))}
        </SliderItemsContainer>
      </Slider>
      <Dots>
        {pictures.map((p, i) => (
          <Dot
            onClick={() => updateView(i)}
            isActive={i === pictureIndex}
            key={"dot-" + i}
          />
        ))}
      </Dots>
    </div>
  );
};
