import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import QuickMenu from "../components/QuickMenu";
import Fade from "react-reveal/Fade";
import PublicComp1 from "../components/PublicComp1";
import PublicComp2 from "../components/PublicComp2";
import PublicComp3 from "../components/PublicComp3";
import PublicComp4 from "../components/PublicComp4";
import Header_A from "../components/navigation/Header_A";

const datum = [
  {
    name: "INTRO",
    target: "/intro",
  },
  {
    name: "CONTACT",
    target: "/contact",
  },
  {
    name: "TEAM",
    target: "/team",
  },
  {
    name: "PROJECT",
    target: "/project",
  },
];

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .react-reveal {
    width: 100%;
    padding: 0px !important;
  }
`;

const ImageSection = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 50%;
  height: 340px;

  object-fit: cover;
  box-shadow: 3px 3px 7px #999;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
`;

const QuickSection = styled.section`
  width: 100%;
  padding: 20px 0px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header_A />
      <Fade>
        <ImageSection>
          <Image
            src="https://w.namu.la/s/cee604ccf3d0b2f0c7083f220d5482f2609952cefb9dfcc5dcbe98f5f3ebd515b061da42a8aa19c578c7955c29bba02d16284bc0613c25498eaaeef39d7870a91315e9d296d9b51f77ee1a7cdbcdd513eeb087171cd88ee018b5c0d96f8d1008e52472ad7da4e3fafce94356565860c1"
            alt="메인이미지1"
          ></Image>
          <Image
            src="https://w.namu.la/s/f125852b83a93f64ca188728696b76a49d16a4bcaeeee0834f00da72bcaf8a8148a08f1b2fb8c6821ed2d6418300df78cbd6a0151a3238d4c35859fb8a2762896860b9401a7e3c71051b0f41ea5df6c3d0ec516d151192882592286a278a44c3"
            alt="메인이미지2"
          ></Image>
        </ImageSection>
      </Fade>
      <Fade bottom>
        <QuickSection>
          <QuickMenu datum={datum} />
        </QuickSection>
      </Fade>

      <div style={{ height: "135px" }}></div>
      <PublicComp4
        title="Project For Common Components With Us"
        desc="will make It. 'CC' is always used to anywhere everywhere in my Platform."
      />

      <div style={{ height: "135px" }}></div>
      <PublicComp2
        imgSource="https://blog.kakaocdn.net/dn/DYeVq/btreqJDKUVg/Uew34FI34UKPwExGU26N2k/img.jpg"
        text="스펙트럼"
      />

      <PublicComp4 title="You Can Contact!" desc="Try It!" />

      <PublicComp1
        datum={[
          {
            title: "INTRODUCE",
            content: "Introduce Us. Come To Here!",
            link: "/intro",
          },
          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },
          {
            title: "SHOW YOUR THINK",
            content: "If You Contact Us....",
            link: "/contact",
          },
        ]}
      />
      <PublicComp3 />
    </Wrapper>
  );
};

export default App;
