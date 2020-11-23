import React, { Component } from "react";
import { connect } from "react-redux";

class VideoContainer extends Component {
  render() {
    console.log(this.props.videos);
    return (
      <div>
        <h1>Here's my list of videos below...</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

export default connect(mapStateToProps)(VideoContainer);
