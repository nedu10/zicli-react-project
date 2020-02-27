import React from "react";
import Radium from "radium"
import Cards from "./Cards.jsx"
import Button from "../../../Components/Button"

const Content = (props) => {

  const styles = {
    height: "auto",
    paddingBottom: "5rem"
  }

  return (
    <div style={styles}>
      <Cards {...props} />
      <Button title="Add Caption" />
    </div>
  );
};

export default Radium(Content);
