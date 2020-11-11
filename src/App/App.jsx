/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";
import { SignIn } from "views";

function App() {
  return (
    <main css={{ backgroundColor: "#13202c", minHeight: "100vh" }}>
      <SignIn />
    </main>
  );
}

export default App;
