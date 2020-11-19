import React from "react";
import FormTextInput from "./FormTextInput";

const FormInputGroup = ({ video, handleFormInputChange }) => {
  return (
    <div>
      <FormTextInput
        name="title"
        placeholder="Video Title"
        value={video.title}
        handleFormInputChange={handleFormInputChange}
      />
      <FormTextInput
        name="description"
        placeholder="Quick Description"
        value={video.description}
        handleFormInputChange={handleFormInputChange}
      />
      <p className="text-sm text-center mb-2 text-mevo-dark-grey">
        Please submit 1080p HD YouTube clip
      </p>
      <FormTextInput
        name="youtube_url"
        placeholder="YouTube Link"
        value={video.youtube_url}
        handleFormInputChange={handleFormInputChange}
      />
      <p className="text-sm text-center mb-2 text-mevo-dark-grey">
        Emails are not shared publicly
      </p>
      <FormTextInput
        name="user_email"
        placeholder="Contact Email"
        value={video.user_email}
        handleFormInputChange={handleFormInputChange}
      />
    </div>
  );
};

export default FormInputGroup;
