import React, { Component } from "react";
// // import Modal from "./Modal"

class ChallengeAnswer extends Component {

 
    render() {
        return(
            <div>
            {this.props.challenge_answer.correct ? "You did Great!" : "Better luck next time"}
            </div>
    )}
}

export default ChallengeAnswer;

