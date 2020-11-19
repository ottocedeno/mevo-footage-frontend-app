import React, { Component } from "react";
import { connect } from "react-redux";

import FormTextGroup from "../components/formElements/FormTextGroup";
import FormRadioGroup from "../components/formElements/FormRadioGroup";

import FormAuthorization from "../components/formElements/FormAuthorization";
import FormErrors from "../components/formElements/FormErrors";
import FormSubmitButton from "../components/formElements/FormSubmitButton";
import { submitVideoData } from "../utilities/fetchData";

class SubmitFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      video: {
        title: "",
        description: "",
        youtube_url: "",
        user_email: "",
        model: "Mevo Plus",
        category_name: "House of Worship",
        authorized_to_share: false,
      },
      errors: [],
    };
  }

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
        } else if (result.message === "Successful submission") {
          this.props.setRedirect();
        }
      });
  };

  render() {
    return (
      <form
        className="px-4 mt-8 text-mevo-blue"
        onSubmit={this.handleFormSubmit}
      >
        <FormTextGroup
          video={this.state.video}
          handleFormInputChange={this.handleFormInputChange}
        />
        <FormRadioGroup
          title="Footage shot with"
          options={this.props.cameras}
          name="model"
          current={this.state.video.model}
          handleFormInputChange={this.handleFormInputChange}
        />
        <FormRadioGroup
          title="category (select one)"
          options={this.props.categories}
          name="category_name"
          current={this.state.video.category_name}
          handleFormInputChange={this.handleFormInputChange}
        />
        <FormAuthorization
          current={this.state.video.authorized_to_share}
          handleAuthorizationCheck={this.handleAuthorizationCheck}
        />
        <FormErrors errors={this.state.errors} />
        <FormSubmitButton />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cameras: state.cameras,
  };
};

export default connect(mapStateToProps)(SubmitFormContainer);
