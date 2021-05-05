import React, { Component } from "react";
// import { Link } from 'react-router-dom'; 

class GameShow extends Component {  
  
 
  render() {
    return (
      <div>
       
        <h1>Welcome to EmotionID, {this.props.game.username}</h1>
        <h2>You are currently on challenge number:</h2>
        <h2>  {this.props.game.current_challenge_id}</h2>
        {/* <Link to={`challenges/${this.props.game.current_challenge_id}`}> Begin challenge</Link> */}
      </div>
    )
    }
  }
export default GameShow




