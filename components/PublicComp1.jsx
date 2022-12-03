import React, { useState } from "react";
import styled from "styled-components";
import {
  AlignCenterOutlined,
  EditOutlined,
  PicRightOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const Wrapper = styled.section`
  width: 100%;
  margin: 30px 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 320px;
  min-width: 320px;
  height: 210px;
  margin: 9px;

  border-radius: 2px;
  box-shadow: 1.5px 1.5px 2.5px #d8d8d8;
  background-color: #d8d8d8;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #9b9b9b;
    border-radius: 0px;
  }

  @media screen and (max-width: 1260px) {
    width: 290px;
    min-width: 290px;
    height: 210px;
  }
  @media screen and (max-width: 1150px) {
    width: 260px;
    min-width: 260px;
    height: 195px;
  }

  @media screen and (max-width: 1040px) {
    width: 240px;
    min-width: 240px;
    height: 180px;
  }
`;

const iconStyle = {
  fontSize: 23,
  color: "#fff",
};

const BoxTitle = styled.article`
  font-size: 20px;
  border-bottom: 2px solid #fff;
  font-weight: bold;
  margin-top: 3px;
`;

const BoxContent = styled.article`
  font-size: 16px;
  color: #4d4d4d;
  margin-top: 7px;
  padding: 6px;
`;

const BoxLink = styled.article`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 50px;
  float: right;
`;

// datum : iconName, title, content, link
const PublicComp1 = ({ datum = [] }) => {
  ///////////// STATE //////////////

  ///////////// HOOKS //////////////
  const rt = useRouter();

  ///////////// EFFECT /////////////

  ///////////// HANDLER ////////////
  const moveLink = (target) => {
    rt.push(target);
  };

  return (
    <Wrapper>
      {datum.map((v, idx) => (
        <Box>
          {idx === 0 && <AlignCenterOutlined styled={{ ...iconStyle }} />}
          {idx === 1 && <EditOutlined styled={{ ...iconStyle }} />}
          {idx === 2 && <PicRightOutlined styled={{ ...iconStyle }} />}
          <BoxTitle>{v.title}</BoxTitle>
          <BoxContent>
            {v.content.length > 30
              ? v.content.substring(0, 30) + "..."
              : v.content}
          </BoxContent>
          <BoxLink onClick={() => moveLink(v.link)}>
            MORE
            <RightOutlined />
          </BoxLink>
        </Box>
      ))}
    </Wrapper>
  );
};

export default PublicComp1;
