/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
// import React from "react";

// actve: #0091e7
const StyledContainer = styled.div`
  width: 100%;
  background: #162738;
  padding: 0.8rem 1rem 0.3rem;
  border-bottom: 2px solid #8599a6;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  color: #8599a6;
  font-size: 1.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #fff;
  outline: 0;
  font-size: 1.9rem;
`;

const FormInput = ({ label, id, type, inputValue, onInputValueChange }) => {
  // const [active, setActive] = React.useState(false);

  function handleChange(event) {
    onInputValueChange(event.target.value);
  }

  // FIXME: Tengo problemas para lograr el efecto del focus sobre el input
  // pseudo selector :active?

  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id}
        onChange={handleChange}
        value={inputValue}
        autoComplete="off"
      />
    </StyledContainer>
  );
};

export default FormInput;
