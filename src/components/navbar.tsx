import React from "react";
import Logo from "img/logo.svg";

const NavBar = () => {
  return (
    <nav className="nav bg-dark">
      <img id="navbarLogo" className="rounded" src={Logo} alt="" />
      <span>{process?.env?.REACT_APP_NAME || "unnamed app"}</span>
    </nav>
  );
};

export default NavBar;
