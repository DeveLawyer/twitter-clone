import styled from "@emotion/styled";
import React from "react";

const StyledLink = styled.a`
  color: #0091e7;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, to }) => {
  return <StyledLink href={to}>{children}</StyledLink>;
};

export default Link;
