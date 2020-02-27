import React from "react"
import Nav from "../../../Components/Nav"
import SearchField from "./SearchField.jsx"
import Radium from "radium"

const Header = () => {

  const styles = {
    height: "20rem"
  }

  return (
    <div style={styles}>
      <Nav />
      <SearchField />
    </div>
  );
}

export default Radium(Header);