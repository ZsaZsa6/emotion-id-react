import React, { Component } from "react";
import { Link } from "react-router-dom";

class GameList extends Component {
  listGames = () => {
    return this.props.games.map((game) => (
      <div className="bg-gray-200">
        <div className="font-bold text-blue-700 text-lg uppercase container mx-auto box-content h-20 w-20 p-2 border-5 ">
          <li className="" key={game.id}>
            <Link
              className="hover:underline text-center"
              to={`/games/${game.username}`}
            >
              {" "}
              {game.username} <br></br>
            </Link>
          </li>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <p className="text-center text-xl text-red-700">
          {" "}
          Please select your username to view your game
        </p>
        <ul>{this.listGames()}</ul>
      </div>
    );
  }
}
export default GameList;
