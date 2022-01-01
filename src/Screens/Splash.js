import React, { useEffect } from "react";
import { styles, colors, useWindowDimensions } from "../Constants/styles";
import "../Constants/cssStyles.css";
import Authentication from "./Authentication";

function Splash() {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        ...styles.container,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* <a
        className="title"
        style={{
          fontSize: width < 1400 ? width / 15 : 90,
          height: width / 15,
        }}
      >
        Welcome to
      </a> */}
      <img
        src={require("../Assets/netflix.png")}
        alt="Netflix logo"
        className="imageAnimation"
      />
    </div>
  );
}

export default Splash;
