import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Backdrop from "../../Components/Backdrop";
import { connect } from "react-redux";
import { fetchAllCaptions } from "../../Reducers/ApiInteractions.jsx";
import { getCaptions } from "../../EndPoints.jsx";
import AddTagsToCaptionForm from "../../Components/Backdrop/AddTagsToCaptionForm";
import AddCaptionForm from "../../Components/Backdrop/AddCaptionForm.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    getCaptions().then(res => {
      let captions = res.data
        ? res.data.data.captions
        : [
          { id: 1, caption: "Something Sha" },
          { id: 2, caption: "Something Sha" },
          { id: 3, caption: "Something Sha" }
        ]
      // console.log(captions)
      this.props.fetchCaptionsHandler(captions)
    })
  }

  submit(e) {
    e.preventDefault();
    // console.log(e.target);
  }

  render() {
    let { isCaptionForm, isCaptionTagForm, setQuery } = this.props
    let bckdrp = (
      <div>
        {isCaptionForm ? (
          <Backdrop>
            <AddCaptionForm />
          </Backdrop>
        ) : (
          ""
        )}
        {isCaptionTagForm ? (
          <Backdrop>
            <AddTagsToCaptionForm SetQ={setQuery}/>
          </Backdrop>
        ) : (
          ""
        )}
      </div>
    );
    return (
      <div>
        {bckdrp}
        <Header />
        <Content captions={this.props.captions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCaptionForm: state.Effects.isCaptionForm,
  isCaptionTagForm: state.Effects.isCaptionTagForm,
  setQuery: state.Effects.setQuery,
  captions: state.ApiInteractions.captions || []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCaptionsHandler: (captions) => dispatch(fetchAllCaptions(captions))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
