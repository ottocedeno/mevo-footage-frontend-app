import React, { Component } from "react";
import { connect } from "react-redux";
import VideoCard from "../components/VideoCard";

class VideoContainer extends Component {
  renderCards() {
    return (
      <div className="mt-10">
        {this.props.videos.map((videoData, id) => (
          <VideoCard videoData={videoData} key={id} />
        ))}
      </div>
    );
  }

  renderEmptyResult() {
    return (
      <div className="mt-10 mx-4">
        <div className="border-2 border-dashed border-mevo-dark-grey rounded-xl py-8 px-2 text-center border-opacity-50">
          <h2 className="text-mevo-dark-grey text-lg ">
            No videos yet with those filters.
          </h2>
          <a href="/submit-video" className="text-mevo-red mt-2 inline-block">
            Submit a Video
          </a>
        </div>
      </div>
    );
  }

  render() {
    return this.props.videos.length > 0
      ? this.renderCards()
      : this.renderEmptyResult();
  }
}

const mapStateToProps = (state) => {
  return { videos: state.videos };
};

export default connect(mapStateToProps)(VideoContainer);
