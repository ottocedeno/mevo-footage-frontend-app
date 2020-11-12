import React from "react";

const SubmitFormContainer = () => {
  return (
    <form className="px-4 mt-8">
      <input
        type="text"
        name="Video Title"
        placeholder="Video Title"
        className="border border-black rounded-full outline-none px-4 py-3 w-full mb-8"
      />
      <input
        type="text"
        name="Quick Description"
        placeholder="Quick Description"
        className="border border-black rounded-full outline-none px-4 py-3 w-full mb-8"
      />
      <input
        type="text"
        name="YouTube Link"
        placeholder="YouTube Link"
        className="border border-black rounded-full outline-none px-4 py-3 w-full mb-8"
      />
    </form>
  );
};

export default SubmitFormContainer;
