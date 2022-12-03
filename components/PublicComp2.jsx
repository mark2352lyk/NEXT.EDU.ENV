import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 450px;
  background-color: orange;

  overflow: hidden;
  position: relative;
`;

const ImageBox = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 0.4s;

  &:hover {
    transform: scale(1.075);
  }
`;

const ImageText = styled.article`
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 30px;
  font-weight: bold;

  color: #fff;
  z-index: 1;

  text-shadow: 1.5px 1.5px 1.5px #999;
`;

const PublicComp2 = ({ imgSource, text = false }) => {
  ///////////// STATE //////////////

  ///////////// HOOKS //////////////

  ///////////// EFFECT /////////////

  ///////////// HANDLER ////////////

  return (
    <Box>
      <ImageBox src={imgSource} />

      {text && <ImageText>{text}</ImageText>}
    </Box>
  );
};

export default PublicComp2;
