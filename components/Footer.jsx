import { useRouter } from "next/router";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
  width: 100%;
  height: 270px;
  margin-top: 50px;

  background-color: rgb(30, 30, 30);
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    height: 500px;
  }
`;

const FooterBox = styled.div`
  min-width: 270px;
`;

const LinkText = styled.span`
  font-size: 15px;
  color: #666666;
  margin: 0px 15px;
  cursor: pointer;

  transition: 0.75;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  ///////////// STATE //////////////

  ///////////// HOOKS //////////////
  const router = useRouter();

  ///////////// EFFECT /////////////

  ///////////// HANDLER ////////////

  const moveLink = useCallback((target) => {
    router.push(target);
  }, []);

  return (
    <MyFooter>
      <FooterBox>
        <div>사업자번호 : 123123123</div>
        <div>상호명: 뭐시기</div>
        <div>상호명: 뭐시기</div>
        <div>상호명: 뭐시기</div>
        <div>상호명: 뭐시기</div>
        <div>상호명: 뭐시기</div>
        <div>상호명: 뭐시기</div>
      </FooterBox>
      <FooterBox>
        <LinkText onClick={() => moveLink("/")}>Home</LinkText>
        <LinkText onClick={() => moveLink("/intro")}>Intro</LinkText>
        <LinkText onClick={() => moveLink("/project")}>Project</LinkText>
        <LinkText onClick={() => moveLink("/contact")}>Contact</LinkText>
        <LinkText onClick={() => moveLink("/team")}>Team</LinkText>
      </FooterBox>
      <FooterBox>
        <div>로고</div>

        <div>sns링크</div>
        <div>sns링크</div>
        <div>sns링크</div>
      </FooterBox>
    </MyFooter>
  );
};

export default Footer;
