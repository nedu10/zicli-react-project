import React from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showCaptionTagForm } from "../../../Reducers/Effects";

const Card = props => {
  const { showCaptionTagFormHandler } = props;

  const styles = {
    height: "10rem",
    fontSize: ".8rem"
  };

  return props.captions.map(item => (
    <div style={styles} key={item.id} className="col-lg-2 p-2 text-center">
      <div className="d-flex caption-card justify-content-center rounded-lg card p-2 m-1 align-middle h-100">
        <div>{`${item.caption} !`}</div>
        <div className="mt-3 tag-link-wrapper">
          <Link
            onClick={(e) => {
              e.preventDefault()
              showCaptionTagFormHandler([true, item.id])
            }}
            className="tag-link"
          >
            Add Tag
          </Link>
        </div>
      </div>
    </div>
  ));
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showCaptionTagFormHandler: option => dispatch(showCaptionTagForm(option))
});

export default connect(null, mapDispatchToProps)(Radium(Card));
