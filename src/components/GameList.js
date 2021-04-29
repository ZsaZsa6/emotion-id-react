import React, { Component } from "react";



class GameList extends Component {
  listGames = () => {
    // debugger
    return this.props.games.map((game) => (
      <li key={game.id}>{game.username}</li>
    ));
  };
  render() {
    return (
      <div>
        {this.listGames()}
              </div>
    );
  }
}
export default GameList;
