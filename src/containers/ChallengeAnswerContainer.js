import ChallengeAnswer from "../components/ChallengeAnswer";
import { connect } from "react-redux";
import React, { Component } from "react";

class ChallengeAnswerContainer extends Component {


  handleLoading = () => {
    if (!this.props.challengeAnswer) {
      <div>Loading...</div>;
    } else {
      return (
        <ChallengeAnswer challengeAnswer={this.props.challengeAnswer} />
      );
    }
  };

  render() {
    return <div>{this.handleLoading()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    challengeAnswer: state.challengeAnswer,
    loading: state.challengeAnswer.loading,
  };
};
// const mapDispatchToProps = (dispatch) => {

// }
export default connect(mapStateToProps)(ChallengeAnswerContainer)