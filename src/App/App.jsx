/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { SignIn } from "views";
import Success from "../views/Success/Success";

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  function onLoggedInChange(value) {
    setloggedIn(value);
  }

  return (
    <Router>
      <main css={{ backgroundColor: "#13202c", minHeight: "100vh" }}>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Redirect to="/success" />
            ) : (
              <SignIn loggedIn={loggedIn} onLoggedInChange={onLoggedInChange} />
            )}
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
