import React from "react";
import Radium from "radium";
import { connect } from "react-redux";
import { addCaption } from "../../Reducers/ApiInteractions";

const AddCaptionForm = props => {

  let { postCaptionHandler } = props

  const styles = {
    position: "relative",
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: "5px",
    top: "40%"
  };

  return (
    <div onClick={(e) => e.stopPropagation()} style={styles} className="p-4 mx-auto w-50">
      <form className="h-100" onSubmit={postCaptionHandler}>
        <div className="mb-5">
          <input
            className="w-90 h-30"
            type="text"
            name="caption"
            placeholder="Add New Captions"
          />
        </div>
        <div className="d-flex justify-content-end w-100">
          <input
            className="w-30 btn btn-primary"
            type="submit"
            value="Add New"
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  postCaptionHandler: (e) => dispatch(addCaption(e))
});

export default connect(null, mapDispatchToProps)(Radium(AddCaptionForm));
