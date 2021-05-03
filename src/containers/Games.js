import GameList from "../components/GameList";
import { connect } from "react-redux";
import { fetchGames } from "../actions/gameActions.js";
import React, { Component } from "react";

class Games extends Component {
 
  componentDidMount() {
    this.props.fetchGames();
  }
  handleLoading = () => {
    console.log(this.props.loading);
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      return <GameList games={this.props.games} />;
    }
  };

  render() {
    return (
      <div>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.games,
    loading: state.games.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGames: () => dispatch(fetchGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
