import React, { Component } from "react";
import SubmitPage from "./pages/SubmitPage";

import { fetchCategoriesAndCameras } from "./utilities/fetchData";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return <SubmitPage />;
  }

  componentDidMount() {
    fetchCategoriesAndCameras()
      .then((response) => response.json())
      .then((data) => {
        this.props.loadCategories(data.categories);
        this.props.loadCameras(data.cameras);
      });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (categories) =>
      dispatch({ type: "LOAD_CATEGORIES", categories }),
    loadCameras: (cameras) => dispatch({ type: "LOAD_CAMERAS", cameras }),
  };
};

export default connect(null, mapDispatchToProps)(App);
