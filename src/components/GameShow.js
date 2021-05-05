import React, { Component } from "react";

class GameShow extends Component {  
  // showGame = () => {
  //   return this.props.game
    
  // }
 
  render() {
    return (
      <div>
       
        <h1>Welcome to EmotionID, {this.props.game.username}</h1>
        <h2>You are currently on level number: and challenge number:</h2>
        <h2>  {this.props.game.current_challenge_id}</h2>



      </div>
    )
    }
  }
export default GameShow




