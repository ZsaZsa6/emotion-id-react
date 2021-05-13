import Challenge from "../components/Challenge";
import { connect } from "react-redux";
import { fetchChallenge } from "../actions/challengeActions.js";
import { createAnswer } from "../actions/challengeActions.js";
import React, { Component } from "react";

class ChallengeContainer extends Component {
  componentDidMount() {
    if(!this.props.challenge)
    this.props.fetchChallenge(this.props.match.params.id);
  }

  handleLoading = () => {
    if (!this.props.challenge) {
      return <div>Loading...</div>;
    } else {
      return <Challenge challenge={this.props.challenge} />;
    }
  };
  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state, {match}) => {  
  return {
    // eslint-disable-next-line 
    challenge: state.challenges.list.find((challenge) => challenge.id == match.params.id),
    loading: state.challenges.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchChallenge: (id) => dispatch(fetchChallenge(id)),
  dispatchCreateAnswer: (answer) => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
