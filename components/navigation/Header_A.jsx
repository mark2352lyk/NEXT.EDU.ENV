import React from "react";
import styled from "styled-components";
import items from "./items";
import { Whole, LnbWrapper, HeaderSection } from "./designSource";

// KO, EN
const LAN_TYPE = "KO";

const Header_A = () => {
  return (
    <Whole>
      <HeaderSection>
        {items.map((item) => {
          return (
            <div>
              {LAN_TYPE === "KO" && item.name_ko}
              {LAN_TYPE === "EN" && item.name_en}
            </div>
          );
        })}
      </HeaderSection>
      <LnbWrapper>
        {items.map((item) => (
          <div>
            {item.menus.map((menu) => {
              return <div>{menu.name_ko}</div>;
            })}
          </div>
        ))}
      </LnbWrapper>
    </Whole>
  );
};

export default Header_A;
