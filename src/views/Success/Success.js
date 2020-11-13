/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Success = () => {
  console.log("Render: Success");

  return (
    <div
      css={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 css={{ color: "#fff" }}>Success</h1>
    </div>
  );
};

export default Success;
