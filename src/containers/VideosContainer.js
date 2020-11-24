import React, { Component } from "react";
import { connect } from "react-redux";
import VideoCard from "../components/VideoCard";

class VideoContainer extends Component {
  render() {
    return (
      <div className="mt-10">
        {this.props.videos.map((videoData, id) => (
          <VideoCard videoData={videoData} key={id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

export default connect(mapStateToProps)(VideoContainer);
