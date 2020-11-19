import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SubmitFormContainer from "../containers/SubmitFormContainer";

class SubmitPage extends Component {
  constructor() {
    super();
    this.state = {
      redirectToConfirmation: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirectToConfirmation: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirectToConfirmation) {
      return <Redirect to="/confirmation" from="/submit-video" />;
    }
  };

  render() {
    return (
      <>
        <div className="pb-10">
          <div className="text-white px-4 py-10 bg-mevo-light-grey text-mevo-blue flex justify-center">
            <div className="max-w-lg ">
              <h1 className="text-4xl font-bold leading-tight">
                Submit your <br className="md:hidden" />
                Mevo video
              </h1>
              <p className="mt-2">
                Enter your Mevo Start footage to be featured on our video
                portal. Chance to win a free Mevo Start every month!
              </p>
            </div>
          </div>
          <div className="md:max-w-2xl md:m-auto">
            <SubmitFormContainer setRedirect={this.setRedirect} />
          </div>
        </div>
        {this.renderRedirect()}
      </>
    );
  }
}

export default SubmitPage;
