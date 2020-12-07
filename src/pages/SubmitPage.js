import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import PageHeader from "../components/ui/PageHeader";
import SubmitFormContainer from "../containers/SubmitFormContainer";

class SubmitPage extends Component {
  constructor(props) {
    super(props);
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
        <div className="pb-10 max-w-sm mx-auto">
          <PageHeader>
            <PageHeader.Title>Video Submission</PageHeader.Title>
            <PageHeader.SubHeading>
              Enter your Mevo footage to be featured on our Video Gallery. Each
              entry gives you a chance to win Mevo prizes.
            </PageHeader.SubHeading>
          </PageHeader>
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
