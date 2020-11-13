import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";
import FormRadioInput from "../components/FormRadioInput";
import FormCheckboxInput from "../components/FormCheckboxInput";
import FormSubmitButton from "../components/FormSubmitButton";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      youtube_url: "",
      user_email: "",
      model: this.cameras[0],
      category_name: this.categories[0],
      authorized_to_share: false,
    };
  }

  cameras = ["Mevo Plus", "Mevo Start", "Mevo Core"];

  categories = [
    "House of Worship",
    "Sports",
    "Government",
    "Conferences",
    "Education",
    "Gaming",
    "Fitness",
    "Hobbies",
    "Music",
  ];

  handleFormInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAuthorizationCheck = (event) => {
    this.setState({
      authorized_to_share: !this.state.authorized_to_share,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  renderTextInputs = () => {
    return (
      <div>
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
      </div>
    );
  };

  renderCameraSelector = () => {
    return (
      <div>
        <p className="text-center uppercase font-bold text-sm">
          Footage shot with
        </p>
        <div className="flex flex-col mt-2 mb-4 pl-4">
          {this.cameras.map((camera, id) => {
            return (
              <FormRadioInput
                key={id}
                name="model"
                value={camera}
                current={this.state.model}
                handleFormInputChange={this.handleFormInputChange}
              />
            );
          })}
        </div>
      </div>
    );
  };

  renderCategorySelection = () => {
    return (
      <div>
        <p className="text-center uppercase font-bold text-sm">
          category (select one)
        </p>
        <div className="flex mt-2 mb-4 flex-col pl-4">
          {this.categories.map((category, id) => {
            return (
              <FormRadioInput
                key={id}
                name="category_name"
                value={category}
                current={this.state.category_name}
                handleFormInputChange={this.handleFormInputChange}
              />
            );
          })}
        </div>
      </div>
    );
  };

  renderAuthorization = () => {
    return (
      <div className="bg-gray-200 py-3 rounded-md mb-6">
        <p className="text-center uppercase font-bold text-sm">Authorization</p>
        <p className="text-sm px-4 mt-2">
          You authorize that you are the owner of this content and hereby give
          Mevo Inc, permission to share this through the customer video portal,
          website, social media and other platforms.
        </p>
        <div className="flex justify-center items-center">
          <FormCheckboxInput
            name="authorized_to_share"
            current={this.state.authorized_to_share}
            label="I Authorize this footage"
            handleCheck={this.handleAuthorizationCheck}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <form className="px-4 mt-8" onSubmit={this.handleFormSubmit}>
        {this.renderTextInputs()}
        {this.renderCameraSelector()}
        {this.renderCategorySelection()}
        {this.renderAuthorization()}
        <FormSubmitButton />
      </form>
    );
  }
}

export default SubmitFormContainer;
