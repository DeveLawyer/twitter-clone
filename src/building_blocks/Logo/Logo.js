/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactComponent as LogoImg } from "../../images/twitter-logo.svg";

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
