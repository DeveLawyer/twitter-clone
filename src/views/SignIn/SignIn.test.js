import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "./SignIn";

describe("SignIn Suite", () => {
  it("should set the button as disabled when both fields are empty", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should set the button as disabled when only username is entered", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const usernameInput = screen.getByLabelText("Teléfono, correo o usuario");
    fireEvent.change(usernameInput, { target: { value: "zamir@test.com" } });

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should set the button as disabled when only password is entered", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const passwordInput = screen.getByLabelText("Contraseña");
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should set the button as disabled when an invalid username is entered", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const usernameInput = screen.getByLabelText("Teléfono, correo o usuario");
    fireEvent.change(usernameInput, { target: { value: "invalid" } });
    const passwordInput = screen.getByLabelText("Contraseña");
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should set the button as disabled when an invalid password is entered", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const usernameInput = screen.getByLabelText("Teléfono, correo o usuario");
    fireEvent.change(usernameInput, { target: { value: "zamir@test.com" } });
    const passwordInput = screen.getByLabelText("Contraseña");
    fireEvent.change(passwordInput, { target: { value: "abc" } });

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", true);
  });

  it("should set the button as enabled when both valid username and password are entered", async () => {
    const { findByText } = render(
      <SignIn loggedIn={false} onLoggedInChange={Function.prototype} />
    );

    const usernameInput = screen.getByLabelText("Teléfono, correo o usuario");
    fireEvent.change(usernameInput, { target: { value: "zamir@test.com" } });
    const passwordInput = screen.getByLabelText("Contraseña");
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const button = await findByText("Iniciar sesión");
    expect(button).toHaveProperty("disabled", false);
  });
});
