import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useCallback } from "react";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  width: ${(props) => props.size};
  height: 55px;
  border: 0.6px solid #cecece;
  padding: 25px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 3px 3px 7px #999;
  transition: 1s;
  cursor: pointer;

  &:hover {
    background-color: #393838;
    border-radius: 10px;
    color: #fff;
    font-size: 17px;
  }

  &:not(:last-child) {
    border-right: 0px;
  }

  @media screen and (max-width: 500px) {
    &:hover {
      font-size: 15px;
    }
  }
`;

const QuickMenu = ({ datum = [] }) => {
  ///////////// STATE //////////////

  ///////////// HOOKS //////////////
  const router = useRouter();

  ///////////// EFFECT /////////////

  ///////////// HANDLER ////////////
  const movePage = useCallback((target) => {
    router.push(target);
  }, []);

  return (
    <Wrapper>
      {datum.map((v) => {
        if (datum.length === 0) null;

        return (
          <Box
            onClick={() => movePage(v.target)}
            key={v.name}
            size={`calc(100% / ${datum.length})`}
          >
            {v.name}
          </Box>
        );
      })}
    </Wrapper>
  );
};

export default QuickMenu;
