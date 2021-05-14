import React, { Component } from 'react';

class Challenge extends Component {

    render() {
        return (
            <div>
                
                <h2>{this.props.challenge.emotion_name}</h2>
                
            </div>
        )
    }
}

export default Challenge;