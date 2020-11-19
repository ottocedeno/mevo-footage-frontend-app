import React from "react";
import FormCheckboxInput from "./FormCheckboxInput";

const FormAuthorization = ({ current, handleAuthorizationCheck }) => {
  return (
    <div className="bg-gray-200 py-3 rounded-md mb-6">
      <p className="text-center uppercase font-bold text-sm">Authorization</p>
      <p className="text-sm px-4 mt-2">
        You authorize that you are the owner of this content and hereby give
        Mevo Inc, permission to share this through the customer video portal,
        website, social media and other platforms.
      </p>
      <div className="flex justify-center items-center my-2">
        <FormCheckboxInput
          name="authorized_to_share"
          current={current}
          label="I Authorize this footage"
          handleCheck={handleAuthorizationCheck}
        />
      </div>
    </div>
  );
};

export default FormAuthorization;
