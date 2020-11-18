/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import axios from "axios";

import { FormInput, Link, Logo } from "building_blocks";

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
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #23608e05;
  }
`;

const SignIn = ({ loggedIn, onLoggedInChange }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = React.useState({
    usernameError: false,
    passwordError: false,
  });

  // TODO: abstraer estas funciones
  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function checkIfUserIsValid(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(String(email).toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    const usernameError = !checkIfUserIsValid(username);
    const passwordError = password.length < 6;

    setErrors({ ...errors, usernameError, passwordError });

    // FIXME: Al hacer submit por primera vez, siempre arroja el token
    if (errors.usernameError || errors.passwordError) {
      console.log("Error! return!");
      return;
    } else {
      axios.post("api/login", { username, password }).then((res) => {
        console.log(res.data);
        onLoggedInChange(!loggedIn);
      });
    }
  }
  // investiga como implementar useCallback:
  // https://www.robinwieruch.de/react-usecallback-hook
  // https://www.robinwieruch.de/react-memo
  const isDataValid =
    username && password && !errors.usernameError && !errors.passwordError;

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
        <StyledButton type="submit" disabled={!isDataValid}>
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
