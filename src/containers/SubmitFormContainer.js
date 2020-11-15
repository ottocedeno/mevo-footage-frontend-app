import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";
import FormRadioInput from "../components/FormRadioInput";
import FormCheckboxInput from "../components/FormCheckboxInput";
import FormErrors from "../components/FormErrors";
import FormSubmitButton from "../components/FormSubmitButton";
import { submitVideoData } from "../utilities/fetchData";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
        title: "",
        description: "",
        youtube_url: "",
        user_email: "",
        model: this.cameras[0],
        category_name: this.categories[0],
        authorized_to_share: false,
      },
      errors: [],
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
      video: {
        ...this.state.video,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleAuthorizationCheck = () => {
    this.setState({
      video: {
        ...this.state.video,
        authorized_to_share: !this.state.authorized_to_share,
      },
    });
  };

  updateErrors = (errors) => {
    this.setState({
      errors,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    submitVideoData({ video: this.state.video })
      .then((response) => response.json())
      .then((result) => {
        if (!!result.errors) {
          this.updateErrors(result.errors);
        }
      });
  };

  renderTextInputs = () => {
    return (
      <div>
        <FormTextInput
          name="title"
          placeholder="Video Title"
          value={this.state.video.title}
          handleFormInputChange={this.handleFormInputChange}
        />
        <FormTextInput
          name="description"
          placeholder="Quick Description"
          value={this.state.video.description}
          handleFormInputChange={this.handleFormInputChange}
        />
        <p className="text-sm text-center mb-2 text-mevo-dark-grey">
          Please submit 1080p HD YouTube clip
        </p>
        <FormTextInput
          name="youtube_url"
          placeholder="YouTube Link"
          value={this.state.video.youtube_url}
          handleFormInputChange={this.handleFormInputChange}
        />
        <p className="text-sm text-center mb-2 text-mevo-dark-grey">
          Emails are not shared publicly
        </p>
        <FormTextInput
          name="user_email"
          placeholder="Contact Email"
          value={this.state.video.user_email}
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
                current={this.state.video.model}
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
                current={this.state.video.category_name}
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
        <div className="flex justify-center items-center my-2">
          <FormCheckboxInput
            name="authorized_to_share"
            current={this.state.video.authorized_to_share}
            label="I Authorize this footage"
            handleCheck={this.handleAuthorizationCheck}
          />
        </div>
      </div>
    );
  };

  renderErrors = () => {
    if (this.state.errors.length > 0) {
      return (
        <div className="border border-mevo-red bg-red-200 text-mevo-red text-sm rounded my-6 py-3 px-4">
          <p className="font-bold uppercase mb-1 text-center">
            Please update the following
          </p>
          <ul className="ml-4">
            {this.state.errors.map((error, id) => {
              return (
                <li key={id} className="list-disc">
                  {error}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <form
        className="px-4 mt-8 text-mevo-blue"
        onSubmit={this.handleFormSubmit}
      >
        {this.renderTextInputs()}
        {this.renderCameraSelector()}
        {this.renderCategorySelection()}
        {this.renderAuthorization()}
        <FormErrors errors={this.state.errors} />
        <FormSubmitButton />
      </form>
    );
  }
}

export default SubmitFormContainer;
