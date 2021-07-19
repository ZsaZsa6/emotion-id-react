import ChallengeAnswer from "../components/ChallengeAnswer";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import React, { Component } from "react";

class ChallengeAnswerContainer extends Component {
  handleLoading = () => {
    if (!this.props.challengeAnswer.face_id) {
      return <div></div>;
    } else {
      return <ChallengeAnswer challenge_answer={this.props.challengeAnswer} />;
    }
  };

  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    challengeAnswer: state.challenge_answer.challenge_answer,
  };
};

export default withRouter(connect(mapStateToProps)(ChallengeAnswerContainer));
