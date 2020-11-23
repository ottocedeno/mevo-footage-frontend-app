import React from "react";
import PrimaryButton from "../components/UIelements/PrimaryButton";

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mevo-light-grey text-mevo-blue text-center px-8">
      <h1 className="text-3xl font-bold leading-tight">
        Thanks for submitting your video
      </h1>
      <p className="mt-6">
        We'll review your submission shortly. <br />
        In the meantime, check out other video submissions from our community
      </p>
      <div className="mt-6 w-full">
        <PrimaryButton url="/" label="Back to Videos" />
      </div>
    </div>
  );
};

export default ConfirmationPage;
