import React from "react";
import LogoImg from "../images/twitter-logo.svg";
// Si utilizas este tipo de import para svg, no vas a aprovecharlo.
// Sugerencia: import { ReactComponent as LogoImg } from "../images/twitter-logo.svg";

const Logo = () => {
  return (
    <div css={{ textAlign: "center" }}>
      <img src={LogoImg} css={{ width: "6rem" }} alt="twitter logo" />
    </div>
  );
};

export default Logo;
