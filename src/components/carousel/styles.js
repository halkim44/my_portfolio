import styled from "@emotion/styled";

export const Slider = styled.div`
  overflow: hidden;
`;

export const SliderItemsContainer = styled.div`
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

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Dot = styled.span`
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

export const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
