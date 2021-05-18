import Modal from "../components/Modal";
import Alert from "../components/Alert";
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
      <div>Loading...</div>;
      console.log(this.props.challengeAnswer);
    }
    if ((this.props.challengeAnswer.correct = true)) {
      return <Modal modal={this.props.challengeAnswer.correct} />;
    }

    if ((this.props.challengeAnswer.correct = false)) {
      return <Alert alert={this.props.challengeAnswer.correct} />;
    }
  };

  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    challengeAnswer: state.challengeAnswer,
    message: state.message,
    loading: state.challengeAnswer.loading,
  };
};
// const mapDispatchToProps = (dispatch, {match}) =>({
//   dispatchCreateAnswer: (answer) => dispatch(createAnswer(answer, match.params.usernam))

// })
export default connect(mapStateToProps)(ChallengeAnswerContainer);
