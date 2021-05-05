import Challenge from "../components/Challenge";
import { connect } from "react-redux";
import { fetchChallenge } from "../actions/challengeActions.js";
import React, { Component } from "react";

class ChallengeContainer extends Component {
  componentDidMount() {
    console.log(this.props.challenge);
    this.props.fetchChallenge();
  }

  handleLoading = () => {
    console.log(this.props.loading);
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return <Challenge challenge={this.props.challenge} />;
    }
  };
  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    challenge: state.challenge,
    loading: state.challenge.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchChallenge: () => dispatch(fetchChallenge()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
