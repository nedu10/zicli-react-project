import React from "react";
import Logo from "./Logo"
import NavList from "./NavList"
import Radium from "radium";

const Nav = () => {

  const styles = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <div style={styles}>
      <Logo />
      <NavList />
    </div>
  );
};

export default Radium(Nav);
