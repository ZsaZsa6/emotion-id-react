import React, { Component } from "react";

class GameLevel extends Component {
  render() {
    return (
      <div className="bg-gray-200 text-center" key={this.props.game.id}>
        <h1 className="text-2xl text-red-500 font-bold">
          Congratulations, {this.props.game.username}!!
        </h1>
        <br></br>
        <h2>
          You have answered {this.props.game.challenge_answers_count}{" "}
          challenges.
        </h2>
      </div>
    );
  }
}
export default GameLevel;
