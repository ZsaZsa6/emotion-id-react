import React, { Component } from "react";
import { Link } from 'react-router-dom'; 

class GameShow extends Component {  
  
 
  render() {
    return (
      <div className="bg-gray-200">
        <p className="text-center">
       
        <h1 className="text-2xl text-red-500 font-bold">Welcome to your EmotionID game, {this.props.game.username}!!</h1>
        <br></br>
        <h2>You are currently on challenge number:</h2>
        <h2 className="text-xl">  {this.props.game.current_challenge_id}</h2>
        </p>
        <br></br>
        <br></br>
        <p className="text-center">
        <Link className="hover:underline text-2xl text-blue-700 font-bold" to={`/challenges/${this.props.game.current_challenge_id}`}> Begin challenge </Link>
        </p>
      </div>

    )
    }
  }
export default GameShow;




