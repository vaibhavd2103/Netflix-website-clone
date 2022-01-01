import React from "react";

function TopNavigator() {
  return (
    <div
      style={{
        display: "flex",
        height: 60,
        width: "100%",
        alignItems: "center",
        position: "absolute",
        //    paddingLeft: 50,
        //    paddingRight: 50,
      }}
      className="tab_filter"
    >
      <div style={{ width: "100%", alignItems: "center" }}>
        <img
          src={require("../Assets/netflixpng.png")}
          style={{
            width: 120,
            height: 60,
            marginLeft: 30,
            position: "absolute",
            top: 0,
          }}
        />

        <a
          style={{
            marginLeft: 180,
          }}
          className="text"
        >
          Home
        </a>
        <a
          style={{
            marginLeft: 30,
          }}
          className="text"
        >
          Tv Shows
        </a>
        <a
          style={{
            marginLeft: 30,
          }}
          className="text"
        >
          Movies
        </a>
        <a
          style={{
            marginLeft: 30,
          }}
          className="text"
        >
          news & Popular
        </a>
        <a
          style={{
            marginLeft: 30,
          }}
          className="text"
        >
          My List
        </a>
      </div>
    </div>
  );
}

export default TopNavigator;
