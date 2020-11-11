/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

const FormInput = ({ label, id, type }) => {
  const [active, setActive] = React.useState(false);

  // FIXME: Tengo problemas para lograr el efecto del focus sobre el input
  // Porque no utilizas el pseudo selector :active?
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (!inputRef.current.focus()) {
      setActive(false);
    }
  }, [active]);

  const StyledContainer = styled.div`
    width: 100%;
    background: #162738;
    padding: 0.8rem 1rem 0.3rem;
    border-bottom: 2px solid ${active ? "#0091e7" : "#8599a6"};
    margin-bottom: 2rem;
  `;

  const StyledLabel = styled.label`
    color: ${active ? "#0091e7" : "#8599a6"};
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

  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        ref={inputRef}
        onFocus={() => setActive(true)}
        type={type}
        id={id}
        autoComplete="off"
      />
    </StyledContainer>
  );
};

export default FormInput;
