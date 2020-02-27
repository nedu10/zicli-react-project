import React from "react";
import Radium from "radium"
import Card from "./Card.jsx"

const Cards = (props) => {

  const styles = {
    width: "90%",
    "marginBottom": "3rem"
  }

  return (
    <div style={styles} className="row mx-auto">
      <Card {...props} />
    </div>
  );
};

export default Radium(Cards);
