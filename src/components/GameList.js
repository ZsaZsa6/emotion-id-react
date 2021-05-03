import React, { Component } from "react";



class GameList extends Component {
  listGames = () => {
    return this.props.games.map((game) => (
      <button onClick={this.handleClick} key={game.id}>{game.username}</button>
    ));
  };
  handleClick = (e) => {
    e.preventDefault();
   this.showGame()

  }
  render() {
    return (
      <div>
        {this.listGames()}
              </div>
    );
  }
}
export default GameList;
