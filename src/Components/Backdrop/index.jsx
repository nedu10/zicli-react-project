import React from "react";
import { showCaptionForm } from "../../Reducers/Effects.jsx";
import { connect } from "react-redux";
import Radium from "radium";

const Backdrop = props => {
  let { showCaptionFormHandler } = props;
  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "1000",
    top: 0,
    left: 0
  };

  return <div onClick={(e) => {
    showCaptionFormHandler();
  }} style={styles}>{props.children}</div>;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showCaptionFormHandler: (option = false) => dispatch(showCaptionForm(option))
});

export default connect(null, mapDispatchToProps)(Radium(Backdrop));
