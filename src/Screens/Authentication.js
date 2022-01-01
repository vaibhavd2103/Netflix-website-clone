import React, { useState } from "react";
import { colors, styles } from "../Constants/styles";
import "../Constants/cssStyles.css";
import { Input } from "../Components/GlobalComponents";

function Authentication() {
  const [authType, setAuthType] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div style={{ ...styles.container }} className="authImage">
      <img
        src={require("../Assets/netflixpng.png")}
        style={{
          width: 200,
          height: 120,
          position: "absolute",
          top: -20,
        }}
      />
      <div
        style={{
          ...styles.container,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
        //    className="filter"
      >
        {authType === "login" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 500,
            }}
          >
            <h2 className="text" style={{ textAlign: "left", width: "100%" }}>
              Sign In
            </h2>
            <Input
              placeholder={"Email or Phone No"}
              onChange={(text) => setEmail(text.target.value)}
              style={{ width: "95%" }}
            />
            <Input
              placeholder={"Password"}
              onChange={(text) => setPassword(text.target.value)}
              style={{ width: "95%" }}
            />

            <div
              style={{
                display: "flex",
                height: 50,
                marginTop: 50,
                backgroundColor: colors.primary,
                width: "100%",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                style={{ color: "white", textAlign: "center" }}
                className="text"
              >
                Sign In
              </a>
            </div>
            <a
              style={{
                color: colors.primary,
                textAlign: "center",
                marginTop: 20,
              }}
              onClick={() => {
                setAuthType("signUp");
              }}
              className="text"
            >
              Create account
            </a>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 500,
            }}
          >
            <h2 className="text" style={{ textAlign: "left", width: "100%" }}>
              Sign Up
            </h2>
            <Input
              placeholder={"Name"}
              onChange={(text) => setName(text.target.value)}
              style={{ width: "95%" }}
            />
            <Input
              placeholder={"Email or Phone No"}
              onChange={(text) => setEmail(text.target.value)}
              style={{ width: "95%" }}
            />
            <Input
              placeholder={"Password"}
              onChange={(text) => setPassword(text.target.value)}
              style={{ width: "95%" }}
            />

            <div
              style={{
                display: "flex",
                height: 50,
                marginTop: 50,
                backgroundColor: colors.primary,
                width: "100%",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                style={{ color: "white", textAlign: "center" }}
                className="text"
              >
                Sign up
              </a>
            </div>
            <a
              style={{
                color: colors.primary,
                textAlign: "center",
                marginTop: 20,
              }}
              onClick={() => {
                setAuthType("login");
              }}
              className="text"
            >
              Log in to existing account
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authentication;
