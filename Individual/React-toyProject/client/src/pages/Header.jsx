import React from "react";
import { HeaderBox, Globalstyle } from "../components/layout";

const Header = () => {
  return (
    <>
      {/* Globalstyle가 전역부분의 스타일 값을 가지고 있으므로, 스타일이 적용되는 컴포넌트보다 먼저 선언되어야 한다. */}
      <Globalstyle />
      <HeaderBox>
        <p>POST</p>
      </HeaderBox>
    </>
  );
};

export default Header;
