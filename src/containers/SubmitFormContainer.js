import React, { Component } from "react";
import FormTextInput from "../components/FormTextInput";
import FormRadioInput from "../components/FormRadioInput";
import FormSubmitButton from "../components/FormSubmitButton";

class SubmitFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      youtube_url: "",
      user_email: "",
      model: "Mevo Start",
      category_name: this.categories[0],
    };
  }

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
        <div className="flex flex-col mt-2 mb-4">
          <FormRadioInput
            name="model"
            value={"Mevo Start"}
            current={this.state.model}
            handleFormInputChange={this.handleFormInputChange}
          />
          <FormRadioInput
            name="model"
            value={"Mevo Core"}
            current={this.state.model}
            handleFormInputChange={this.handleFormInputChange}
          />
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

  render() {
    return (
      <form className="px-4 mt-8" onSubmit={this.handleFormSubmit}>
        {this.renderTextInputs()}
        {this.renderCameraSelector()}
        {this.renderCategorySelection()}
        <div>
          <FormSubmitButton />
        </div>
      </form>
    );
  }
}

export default SubmitFormContainer;
