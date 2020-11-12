/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import React, { useState, useRef } from "react";
import axios from "axios";

import Logo from "building_blocks/Logo";
import FormInput from "building_blocks/FormInput";
import Link from "building_blocks/Link";

const titleStyles = css`
  color: #fff;
  font-size: 2.3rem;
  text-align: center;
  margin: 1.8rem 0 2.4rem;
`;

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

const SignIn = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = React.useState({
    usernameError: false,
    passwordError: false,
  });

  const btnRef = useRef();

  // TODO: abstraer
  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function validateUsername(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(String(email).toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Aqui se envia la info axios.post('api/login', {user: user.value, pass: pass.value})
    // Recuerda agregar validacion para no enviar los campos vacios

    // Para setear los errores me funcionó usar un callback en useState. Why?
    // https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
    // https://stackoverflow.com/questions/58202302/react-usestate-when-updating-state-twice-first-update-gets-deleted
    // Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:
    if (!validateUsername(username)) {
      setErrors((prevState) => ({
        ...prevState,
        usernameError: true,
      }));
    }
    console.log(errors);

    if (password.length < 6) {
      setErrors((prevState) => ({
        ...prevState,
        passwordError: true,
      }));
    }
    console.log(errors);

    if (!errors.usernameError && !errors.passwordError) {
      setData((prevState) => ({ ...prevState, username, password }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        usernameError: "",
        passwordError: "",
      }));
      return;
    }
  }
  // investiga como implementar useCallback:
  // https://www.robinwieruch.de/react-usecallback-hook
  // https://www.robinwieruch.de/react-memo

  return (
    <div css={{ maxWidth: "600px", margin: "0 auto", paddingTop: "1rem" }}>
      <Logo />
      <h1 css={titleStyles}>Iniciar sesión en Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Teléfono, correo o usuario"
          id="user"
          type="text"
          inputValue={username}
          onInputValueChange={handleUsernameChange}
        />
        <FormInput
          label="Contraseña"
          id="pass"
          type="password"
          inputValue={password}
          onInputValueChange={handlePasswordChange}
        />
        <StyledButton ref={btnRef} type="submit">
          Iniciar sesión
        </StyledButton>
      </form>
      <div css={{ textAlign: "center", marginTop: "3rem" }}>
        <Link to="#">¿Olvidaste tu contraseña?</Link>
        <span css={{ color: "#8599A6", margin: "0 .6rem" }}>·</span>
        <Link to="#">Regístrate en Twitter</Link>
      </div>
    </div>
  );
};

export default SignIn;
