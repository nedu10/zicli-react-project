import React from "react"
import Radium from "radium"

const SearchField = () => {

  const styles = {
    width: "90%",
    margin: "0 auto",
    border: "1px solid #999",
    position: "relative",
    top: "4rem",
    padding: "1rem",
    borderRadius: "5px"
  }

  return (
    <div style={styles}>
      <input type="text" placeholder="Search Tags" />
    </div>
  )
}

export default Radium(SearchField);