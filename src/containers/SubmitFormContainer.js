import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: "Mevo Start",
    };
  }

  render() {
    return (
      <form className="px-4 mt-8">
        <FormTextInput name="title" placeholder="Video Title" />
        <FormTextInput name="description" placeholder="Quick Description" />
        <p className="text-sm text-center mb-2">
          Please submit 1080p HD YouTube clip
        </p>
        <FormTextInput name="YouTubeLink" placeholder="YouTube Link" />
        <p className="text-sm text-center mb-2">
          Emails are not shared publicly
        </p>
        <FormTextInput name="email" placeholder="Contact Email" />

        <p className="text-center uppercase font-bold text-sm">
          Footage shot with
        </p>
        <div className="border border-red-600 flex justify-center space-x-8">
          <label>
            <input
              type="radio"
              name="cameraType"
              value="mevoStart"
              defaultChecked
            />
            Mevo Start
          </label>
          <label>
            <input type="radio" name="cameraType" value="mevoCore" />
            Mevo Core
          </label>
        </div>
      </form>
    );
  }
}

export default SubmitFormContainer;
