import React, { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 30px 0px;

  display: flex;
  flex-direction: ${(props) => props.reverse};
`;

const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  min-width: 300px;

  position: relative;
  margin-right: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;

  object-fit: cover;
`;

const PrevBtn = styled.div`
  position: absolute;
  bottom: 40%;
  left: 3px;
  color: #fff;
  z-index: 1;
  font-size: 30px;
  font-weight: 900;

  cursor: pointer;
`;

const NextBtn = styled.div`
  position: absolute;
  bottom: 40%;
  right: 3px;
  color: #fff;
  z-index: 1;
  font-size: 30px;
  font-weight: 900;

  cursor: pointer;
`;

const PublicComp3 = ({
  reverse = false,
  arr = [
    {
      imageSource:
        "https://w.namu.la/s/48fa4c207ac6037940711ca248a7cc3671adc5a3b1a86993022b06002350eea88d1077552ee6b33c7439d9ee15d4d380ec31d61efb687a8673aefd996d144f4ca1851ba3f28b82aeb1cb78edce76e8daec58d76517325f8eea4996a7ebd1c305b12cb6c071d6d490289f73f60856cb38",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sapiente? Culpa temporibus consectetur porro eos distinctio quam fugit consequuntur, repudiandae praesentium nam dignissimos, maiores dolorum hic molestias excepturi earum a?",
    },
    {
      imageSource:
        "https://s3.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/11/02095705/Sovreign.jpg?w=620",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sapiente? Culpa temporibus consectetur porro eos distinctio quam fugit consequuntur, repudiandae praesentium nam dignissimos, maiores dolorum hic molestias excepturi earum a?",
    },
    {
      imageSource:
        "https://staticg.sportskeeda.com/editor/2021/04/3e4d5-16190815288774-800.jpg",
      title: "Component Title -1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sapiente? Culpa temporibus consectetur porro eos distinctio quam fugit consequuntur, repudiandae praesentium nam dignissimos, maiores dolorum hic molestias excepturi earum a?",
    },
  ],
}) => {
  ///////////// STATE //////////////
  const [idx, setIdx] = useState(0);

  ///////////// HOOKS //////////////

  ///////////// EFFECT /////////////

  ///////////// HANDLER ////////////
  const prevHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === 0) {
        return arr.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, [idx]);
  const nextHandler = useCallback(() => {
    setIdx((prev) => {
      if (prev === arr.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [idx]);

  return (
    <Box reverse={reverse ? "row-reverse" : "row"}>
      <ImageBox>
        <Image src={arr[idx].imageSource} />
        <PrevBtn onClick={prevHandler}>◁</PrevBtn>
        <NextBtn onClick={nextHandler}>▷</NextBtn>
      </ImageBox>

      <div>
        <div>{arr[idx].title}</div>
        <article>{arr[idx].desc}</article>
      </div>
    </Box>
  );
};

export default PublicComp3;
