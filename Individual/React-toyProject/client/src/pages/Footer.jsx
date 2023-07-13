import React from "react";
import { Footerdiv, Logo, Copyright } from "../components/layout";

const Footer = () => {
  return (
  <Footerdiv>
    <Logo>
        <img src="/Logo.png" alt="로고" />
        </Logo>
    <Copyright>Copyright 2023. Weeji all rights reserved.</Copyright>
  </Footerdiv>);
};

export default Footer;
