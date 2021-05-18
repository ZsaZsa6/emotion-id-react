import React, { Component } from "react";

class ChallengeAnswer extends Component {
    correctMessage = () => {
        console.log(this.props.challengeAnswer.correct)
  return(this.props.challengeAnswer.message = "You did great")}

     incorrectMessage = () => {
         return(this.props.challengeAnswer.message = "Keep trying")
     }
 
    // (props.cochallengeAnswer.message)
    render() {
        return(
            <div className ="bg-red-200">
                if{this.challengeAnswer.correct}
                {this.correctMessage()}
            </div>
    )}
}

export default ChallengeAnswer;