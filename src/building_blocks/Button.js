import styled from "@emotion/styled";
import React from "react";

// button non active: #23608e active: #1da1f2
const StyledButton = styled.button`
  background: #23608e;
  color: #fff;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  border: none;
  border-radius: 5rem;
  padding: 1.6rem 0;
  outline: none;
`;

const Button = ({ children }) => {
  // este boton no es reutilizable, solo sirve para hacer trigger con un form
  return <StyledButton type="submit">{children}</StyledButton>;
};

export default Button;
