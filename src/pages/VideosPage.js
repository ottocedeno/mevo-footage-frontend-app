import React from "react";

import PageHeader from "../components/UIelements/PageHeader";
import PrimaryButton from "../components/UIelements/PrimaryButton";
import VideoFilterContainer from "../containers/VideoFilterContainer";

const VideosPage = () => {
  return (
    <div>
      <PageHeader>
        <PageHeader.Title>Mevo Video Gallery</PageHeader.Title>
        <PageHeader.SubHeading>
          Mevo videos shot by customers all around the world. Own a Mevo? Submit
          your footage for a chance to win free gear.
        </PageHeader.SubHeading>
        <div className="mt-4 w-3/5">
          <PrimaryButton label="Submit your footage" url="/submit-video" />
        </div>
      </PageHeader>
      <VideoFilterContainer />
    </div>
  );
};

export default VideosPage;
