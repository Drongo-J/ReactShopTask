import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-content-left">
        <a href="https://aykhan.net" class="my-padding">
          <img
            src="https://media.aykhan.net/assets/logos/aykhannet-transparent-bg-dark.svg"
            alt="logo"
            className="logo"
          ></img>
          <span className="logo-text">AYKHAN.NET</span>
        </a>
      </div>

      <div className="header-content-right my-padding">
        <a href={require("../../task/React - Task.ZIP").default} download className="download-button">
            Download Task
        </a>
      </div>
    </header>
  );
}
