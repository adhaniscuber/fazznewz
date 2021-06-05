import React from "react";
import { Input } from "../atoms";
import Logout from "./logout";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="brand-logo" src="/assets/img/logo.svg" alt="logo" />
      <Logout />
    </nav>
  );
};

export default Navbar;
