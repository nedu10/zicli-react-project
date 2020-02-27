import React, { Component } from "react";
import Radium from "radium";
import { connect } from "react-redux";
import { addCaption, fetchAllTags } from "../../Reducers/ApiInteractions";
import { fetchTags } from "../../EndPoints.jsx";
// import $ from "jquery";

class AddCaptionForm extends Component {
  componentDidMount() {
    fetchTags()
      .then(res => {
        let tags = res.data.data.tags;
        console.log(tags);
        this.props.fetchTagsHandler(tags);
      })
      .catch(error => {
        let tags = [
          { id: 1, tag: "Something Sha" },
          { id: 2, tag: "Something Sha" },
          { id: 3, tag: "Something Sha" }
        ];
        this.props.fetchTagsHandler(tags);
      });
  }

  render() {
    let { postCaptionHandler, setQ, tags } = this.props;

    const styles = {
      position: "relative",
      backgroundColor: "#fff",
      borderRadius: "5px",
      top: "40%",
      height: "50%",
      overflowX: "scroll"
    };

    return (
      <div
        onClick={e => e.stopPropagation()}
        style={styles}
        className="p-4 mx-auto w-50"
      >
        <form className="h-100">
          <div class="[ col-xs-12 col-sm-6 ]">
            <h3>Add Tags To Caption</h3>
            <hr />
            {tags.map((tag, index) => (
              <div key={index}>
                <input
                  style={{ display: "none" }}
                  type="radio"
                  id={`${tag.id} index`}
                />
                <label
                  className="d-flex tags-label"
                  htmlFor={`${tag.id} index`}
                >
                  <div className="tag-icon bg-primary p-3 rounded-left text-white  s-1">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="d-flex pl-2 border s-2 w-50">{tag.id}</div>
                </label>
              </div>
            ))}

            <div className="d-flex justify-content-start w-100 my-3 mx-0">
              <input
                className="w-30 btn btn-warning text-white"
                type="submit"
                value="Add New"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.ApiInteractions.tags
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postCaptionHandler: e => dispatch(addCaption(e)),
  fetchTagsHandler: tags => dispatch(fetchAllTags(tags))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(AddCaptionForm));

// padding: 1.3rem;
