/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import axios from "axios";

import Logo from "building_blocks/Logo";
import FormInput from "building_blocks/FormInput";
import Button from "building_blocks/Button";
import Link from "building_blocks/Link";

const titleStyles = css`
  color: #fff;
  font-size: 2.3rem;
  text-align: center;
  margin: 1.8rem 0 2.4rem;
`;

const SignIn = () => {
  const [data, setData] = useState({});

  // Te faltan los handler para el cambio de user y password

  // investiga como implementar useCallback
  function handleSubmit(event) {
    event.preventDefault();
    const { user, pass } = event.target.elements;
    setData({ ...data, user: user.value, pass: pass.value });
    // Aqui se envia la info axios.post('api/login', {user: user.value, pass: pass.value})
    // Recuerda agregar validacion para no enviar los campos vacios
  }

  // main deberia ir a nivel de aplicaion, no de view
  return (
    <div css={{ backgroundColor: "#13202c", minHeight: "100vh" }}>
      <main css={{ maxWidth: "600px", margin: "0 auto", paddingTop: "1rem" }}>
        <Logo />
        <h1 css={titleStyles}>Iniciar sesión en Twitter</h1>
        <form onSubmit={handleSubmit}>
          <FormInput label="Teléfono, correo o usuario" id="user" type="text" />
          <FormInput label="Contraseña" id="pass" type="password" />
          <Button>Iniciar sesión</Button>
        </form>
        <div css={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="#">¿Olvidaste tu contraseña?</Link>
          <span css={{ color: "#8599A6", margin: "0 .6rem" }}>·</span>
          <Link to="#">Regístrate en Twitter</Link>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
