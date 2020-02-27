import React from "react";
import { Link } from "react-router-dom"
import Radium from "radium"

const NavList = () => {

  const styles = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    fontSize: ".8rem",
  }

  return (
    <ul style={styles}>
      <li className="px-2">
        <Link className="btn btn-primary btn-md text-default font-weight-bold">
          View Tags
        </Link>
      </li>
      <li className="px-2">
        <Link className="btn btn-danger btn-md text-default font-weight-bold">
          Create Tag
        </Link>
      </li>
    </ul>
  );
};

export default Radium(NavList);
