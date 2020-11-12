import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      youtube_url: "",
      user_email: "",
      camera: "Mevo Start",
    };
  }

  handleTextInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form className="px-4 mt-8" onSubmit={this.handleFormSubmit}>
        <FormTextInput
          name="title"
          placeholder="Video Title"
          value={this.state.title}
          handleTextInputChange={this.handleTextInputChange}
        />

        <FormTextInput
          name="description"
          placeholder="Quick Description"
          value={this.state.description}
          handleTextInputChange={this.handleTextInputChange}
        />

        <p className="text-sm text-center mb-2">
          Please submit 1080p HD YouTube clip
        </p>
        <FormTextInput
          name="youtube_url"
          placeholder="YouTube Link"
          value={this.state.youtube_url}
          handleTextInputChange={this.handleTextInputChange}
        />
        <p className="text-sm text-center mb-2">
          Emails are not shared publicly
        </p>
        <FormTextInput
          name="user_email"
          placeholder="Contact Email"
          value={this.state.user_email}
          handleTextInputChange={this.handleTextInputChange}
        />

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
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-red-600 text-white w-full py-3 rounded-full"
          />
        </div>
      </form>
    );
  }
}

export default SubmitFormContainer;
