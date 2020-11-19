import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VideosPage from "./pages/VideosPage";
import SubmitPage from "./pages/SubmitPage";
import ConfirmationPage from "./pages/ConfirmationPage";

import { fetchCategoriesAndCameras } from "./utilities/fetchData";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/submit-video">
            <SubmitPage />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage />
          </Route>
          <Route exact path="/">
            <VideosPage />
          </Route>
        </Switch>
      </Router>
    );
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
