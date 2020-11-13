import React from "react";
import SubmitFormContainer from "../containers/SubmitFormContainer";

const SubmitPage = () => {
  return (
    <div className="pb-10">
      <div className="text-white px-4 py-10 bg-mevo-light-grey text-mevo-blue">
        <h1 className="text-4xl font-bold leading-tight">
          Submit your <br />
          Mevo video
        </h1>
        <p className="mt-2">
          Enter your Mevo Start footage to be featured on our video portal.
          Chance to win a free Mevo Start every month!
        </p>
      </div>
      <SubmitFormContainer />
    </div>
  );
};

export default SubmitPage;
