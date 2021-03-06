import React from "react";

import PageHeader from "../components/ui/PageHeader";
import PrimaryButton from "../components/ui/PrimaryButton";
import VideoFilterContainer from "../containers/VideoFilterContainer";
import VideosContainer from "../containers/VideosContainer";

const VideosPage = () => {
  return (
    <div className="max-w-sm mx-auto">
      <PageHeader>
        <PageHeader.Title>Mevo Video Gallery</PageHeader.Title>
        <PageHeader.SubHeading>
          Mevo videos shot by customers all around the world. Own a Mevo? Submit
          your footage for a chance to win free gear.
        </PageHeader.SubHeading>
        <div className="mt-4 w-3/5">
          <PrimaryButton label="Submit your video" url="/submit-video" />
        </div>
      </PageHeader>
      <VideoFilterContainer />
      <VideosContainer />
    </div>
  );
};

export default VideosPage;
