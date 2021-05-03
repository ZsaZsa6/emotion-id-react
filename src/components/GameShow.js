import React, { Component } from "react";

class GameShow extends Component {
  showGame = () => {
    return this.props.game.filter((game) => game.id);
  };
  render() {
    return <div>{this.showGame()}</div>;
  }
}
export default GameShow;
