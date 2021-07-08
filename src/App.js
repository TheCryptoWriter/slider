import React from "react";
// JSX
import Navbar from "./components/UI/Navbar/Navbar";
import BasicSlider from "./components/BasicSlider/BasicSlider";

const app = () => {
  return (
    <div
      style={{
        color: "#FFF"
      }}
    >
      <Navbar />
      <BasicSlider />
    </div>
  );
};

export default app;
