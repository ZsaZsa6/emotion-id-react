import GameShow from "../components/GameShow";
import { connect } from "react-redux";
import { fetchGame } from "../actions/gameActions.js";
import React, { Component } from "react";

class Game extends Component {
  componentDidMount() {
      console.log(this.props.game)
    if (!this.props.game) {
      this.props.fetchGame(this.props.match.params.username);
    }
  }
  handleLoading = () => {
    console.log(this.props.loading);
    if (this.props.loading) {
      return <div>Loading...</div>;
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
    game: state.games.games.find((game) => game.username === match.params.username),
    loading: state.games.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchGame: (username) => dispatch(fetchGame(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Game);
