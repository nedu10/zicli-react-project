import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/logo192.png"
import Radium from "radium"

const Logo = () => {

  const styles = {
    height: "4rem",
    width: "4rem"
  }

  return (
    <div className="d-flex">
      <div style={styles}>
        <Link to="/">
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="d-flex mx-2 my-auto font-weight-bold text-info">
        Caption Cards
      </div>
    </div>
  );
};

export default Radium(Logo); 
