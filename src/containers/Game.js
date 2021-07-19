import GameShow from "../components/GameShow";
import { connect } from "react-redux";
import { fetchGame } from "../actions/gameActions.js";
import GameLevel from "../components/GameLevel";
import React, { Component } from "react";

class Game extends Component {
  componentDidMount() {
    if (!this.props.game) {
      this.props.fetchGame(this.props.match.params.username);
    }
  }
  handleLoading = () => {
    if (!this.props.game) {
      return <div>Loading...</div>;
    }
    if (this.props.game.current_challenge_id >= 5) {
      return <GameLevel game={this.props.game} />;
    } else {
      return <GameShow game={this.props.game} />;
    }
  };

  render() {
    return <div>{this.handleLoading()}</div>;
  }
}
const mapStateToProps = (state, { match }) => {
  return {
    game: state.games.games.find(
      (game) => game.username === match.params.username
    ),
    loading: state.games.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchGame: (username) => dispatch(fetchGame(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
