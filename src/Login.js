import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
      />
      <a href={loginUrl}>LOGIN HERE</a>
    </div>
  );
}

export default Login;
