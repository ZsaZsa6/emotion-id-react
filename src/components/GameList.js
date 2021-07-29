import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameList extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };
  listGames = () => {
    return this.props.games
      .filter((game) => game.username.includes(this.state.value))
      .map((game) => (
        <div className="bg-gray-200" key={game.id}>
          <div className="bg-blue-100 text-white font-bold rounded-lg border shadow-lg p-10">
            <div className="font-bold text-blue-700 text-lg uppercase container mx-auto box-content h-10 w-20 p-1 border-3 ">
              <li className="" key={game.id}>
                <Link to={`/games/${game.username}`}>
                  {game.username} <br></br>
                </Link>
              </li>
            </div>
          </div>
        </div>
      ));
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Start typing your username"
        />
        <p className="bg-gray-300 text-center text-xl text-red-700">
          Please select your username to view your game or 

        </p>
        <input onChange={this.handleChange} type="text" placeholder="Search for your username" />
        <ul>{this.listGames()}</ul>
      </div>
    );
  }
}

export default GameList;
