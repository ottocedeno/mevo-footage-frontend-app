import React from "react";

import PageHeader from "../components/UIelements/PageHeader";
import PrimaryButton from "../components/UIelements/PrimaryButton";

const VideosPage = () => {
  return (
    <div>
      <PageHeader>
        <PageHeader.Title>Mevo Video Gallery</PageHeader.Title>
        <PageHeader.SubHeading>
          Mevo videos shot by customers all around the world. Own a Mevo? Submit
          your footage for a chance to win free gear.
        </PageHeader.SubHeading>
        <PrimaryButton label="Submit your footage" url="/submit-video" />
      </PageHeader>
    </div>
  );
};

export default VideosPage;
