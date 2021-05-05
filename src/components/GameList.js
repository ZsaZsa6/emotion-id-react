import React, { Component } from "react";
import { Link } from 'react-router-dom'

class GameList extends Component {
  listGames = () => {
    return this.props.games.map((game) => (
      <li className="" key={game.id}>
      <Link to={`/games/${game.username}`}> {game.username} <br></br></Link>   
      </li>     
    ));
  };
 

  render() {
    
    return (
      <div>
        <ul>{this.listGames()}</ul>
      </div>
    );
  }
}
export default (GameList);
