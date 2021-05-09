import Challenge from "../components/Challenge";
import { connect } from "react-redux";
import { fetchChallenge } from "../actions/challengeActions.js";
import React, { Component } from "react";

class ChallengeContainer extends Component {
  componentDidMount() {
    console.log(this.props.challenge);
    // debugger
    if(!this.props.challenge)
    this.props.fetchChallenge(this.props.match.params.id);
  }

  handleLoading = () => {
    console.log(this.props.loading);
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
  // debugger
  console.log(state)
  console.log(match.params.id)
  return {
    // eslint-disable-next-line 
    challenge: state.challenges.list.find((challenge) => challenge.id == match.params.id),
    loading: state.challenges.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchChallenge: (id) => dispatch(fetchChallenge(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
