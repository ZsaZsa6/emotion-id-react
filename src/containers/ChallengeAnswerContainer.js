// import Modal from "../components/Modal";
// import Alert from "../components/Alert";
import ChallengeAnswer from "../components/ChallengeAnswer";
import { connect } from "react-redux";
// import { createAnswer } from "../actions/challengeActions"
import React, { Component } from "react";

class ChallengeAnswerContainer extends Component {
  // componentDidMount() {
  //   if(!this.props.challengeAnswer)
  //   this.props.dispatchCreateAnswer(this.props.match.params.id)
  // }
  handleLoading = () => {
    if (!this.props.challengeAnswer) {
      return <div>Loading...</div>;
    } else {
      console.log(this.props.challengeAnswer);
      return (
      <ChallengeAnswer challenge_answer={this.props.challengeAnswer} />);
    }
  };

  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    // loading: state.challengeAnswer.loading,
    challengeAnswer: state.challenge_answer.challenge_answer,
    message: state.message,
  };
};
// const mapDispatchToProps = (dispatch, {match}) =>({
//   dispatchCreateAnswer: (answer) => dispatch(createAnswer(answer, match.params.usernam))

// })
export default connect(mapStateToProps)(ChallengeAnswerContainer);
