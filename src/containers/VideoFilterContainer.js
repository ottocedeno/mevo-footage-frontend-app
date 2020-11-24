import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../utilities/requests";

class VideoFilterContainer extends Component {
  constructor() {
    super();
    this.state = {
      camera: "All",
      category: "All",
    };
  }

  handleClick = (event) => {
    if (this.state[event.target.name] !== event.target.value) {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  renderFilters = (optionsArray, name) => {
    const options = ["All", ...optionsArray];
    const selected =
      "px-5 bg-mevo-blue rounded-full py-1 text-sm mr-3 flex-shrink-0 text-white shadow-2xl";
    const notSelected =
      "px-5 bg-mevo-light-grey rounded-full py-1 text-sm mr-3 flex-shrink-0 outline-none";

    return options.map((option) => {
      return (
        <button
          className={this.state[name] === option ? selected : notSelected}
          key={option}
          value={option}
          name={name}
          onClick={this.handleClick}
        >
          {option}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="pt-2">
        <h2 className="text-mevo-red font-bold text-center mt-3">CAMERA</h2>
        <div className="flex overflow-x-auto pl-4 items-baseline text-center py-3">
          {this.renderFilters(this.props.cameras, "camera")}
        </div>
        <h2 className="text-mevo-red font-bold text-center mt-3">CATEGORY</h2>
        <div className="flex overflow-x-auto pl-4 items-baseline text-center mt-3">
          {this.renderFilters(this.props.categories, "category")}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    fetchVideos(this.state)
      .then((response) => response.json())
      .then((videos) => this.props.loadVideos(videos));
  }
}

const mapStateToProps = (state) => {
  return { cameras: state.cameras, categories: state.categories };
};

const mapDispatchToProps = (dispatch) => {
  return { loadVideos: (videos) => dispatch({ type: "LOAD_VIDEOS", videos }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoFilterContainer);
