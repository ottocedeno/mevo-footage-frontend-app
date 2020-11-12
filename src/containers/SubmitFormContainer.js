import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";
import FormRadioInput from "../components/FormRadioInput";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      youtube_url: "",
      user_email: "",
      model: "Mevo Start",
    };
  }

  handleFormInputChange = (event) => {
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
          handleFormInputChange={this.handleFormInputChange}
        />

        <FormTextInput
          name="description"
          placeholder="Quick Description"
          value={this.state.description}
          handleFormInputChange={this.handleFormInputChange}
        />

        <p className="text-sm text-center mb-2">
          Please submit 1080p HD YouTube clip
        </p>
        <FormTextInput
          name="youtube_url"
          placeholder="YouTube Link"
          value={this.state.youtube_url}
          handleFormInputChange={this.handleFormInputChange}
        />
        <p className="text-sm text-center mb-2">
          Emails are not shared publicly
        </p>
        <FormTextInput
          name="user_email"
          placeholder="Contact Email"
          value={this.state.user_email}
          handleFormInputChange={this.handleFormInputChange}
        />

        <p className="text-center uppercase font-bold text-sm">
          Footage shot with
        </p>
        <div className="flex justify-center space-x-8 mt-2 mb-4">
          <FormRadioInput
            name="model"
            value={"Mevo Start"}
            currentModel={this.state.model}
            handleFormInputChange={this.handleFormInputChange}
          />
          <FormRadioInput
            name="model"
            value={"Mevo Core"}
            currentModel={this.state.model}
            handleFormInputChange={this.handleFormInputChange}
          />
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
