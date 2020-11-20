import React, { Component } from "react";
import { connect } from "react-redux";

class VideoFilterContainer extends Component {
  constructor() {
    super();
    this.state = {
      camera: "All",
      category: "All",
    };
  }

  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderFilters = (optionsArray, name) => {
    const options = ["All", ...optionsArray];
    return options.map((option) => {
      return (
        <button
          className="px-5 bg-mevo-light-grey rounded-full py-1 text-sm mr-3 flex-shrink-0 outline-none"
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
    {
      console.log(this.state);
    }
    return (
      <div className="pt-2">
        <h2 className="text-mevo-red font-bold text-center mt-3">CAMERA</h2>
        <div className="flex overflow-x-auto pl-4 items-baseline text-center mt-3">
          {this.renderFilters(this.props.cameras, "camera")}
        </div>

        <h2 className="text-mevo-red font-bold text-center mt-3">CATEGORY</h2>
        <div className="flex overflow-x-auto pl-4 items-baseline text-center mt-3">
          {this.renderFilters(this.props.categories, "category")}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cameras: state.cameras, categories: state.categories };
};

export default connect(mapStateToProps)(VideoFilterContainer);
