/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
// Si utilizas este tipo de import para svg, no vas a aprovecharlo.
// import LogoImg from "../images/twitter-logo.svg";
// Sugerencia:
import { ReactComponent as LogoImg } from "../images/twitter-logo.svg";

const Logo = () => {
  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <LogoImg width="60" />
    </div>
  );
};

export default Logo;
