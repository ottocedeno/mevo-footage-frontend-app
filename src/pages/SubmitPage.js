import React from "react";
import SubmitFormContainer from "../containers/SubmitFormContainer";

const SubmitPage = () => {
  return (
    <div className="pb-10">
      <div className=" bg-gray-600 text-white px-4 py-10">
        <h1 className="text-4xl">
          Submit your <br />
          Mevo video
        </h1>
        <p>
          Enter your Mevo Start footage to be featured on our video portal.
          Chance to win a free Mevo Start every month!
        </p>
      </div>
      <SubmitFormContainer />
    </div>
  );
};

export default SubmitPage;
