import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ChallengeAnswer extends Component {

//   
 
    render() {
        return(
                <div>{this.props.challenge_answer.correct ? "You did Great!" : "Better luck next time"}

                </div>
                
                )
          
        
    
}
}

// withRouter redirect after timeout to game.username.current_challenge_id refer to router props:history

export default withRouter(ChallengeAnswer);
// export default ChallengeAnswer

