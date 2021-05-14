import React, { Component } from "react";



class Challenge extends Component {
  // answer = (this.props.challenge.id, this.props.game.id)
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props.challenge.id, e.target.id);  
   this.props.dispatchCreateAnswer({challenge_id: this.props.challenge.id, face_id: e.target.id}, this.game_)
    // (e.target.id)
  }
    
    
    
    
    
    render() {
     
      // console.log(this.props.challenge)
    return (
      <section className="bg-gray-200">
      <div className="grid-cols-3 col-span-3 grid-rows-1 flex justify-center mx-auto bg-gray-200 ">
        <div>
        <button onClick={this.handleClick} >
        <img id={this.props.challenge.faces[0].id}
          className="inline h-33 border-4"
          src={this.props.challenge.faces[0].image_url}
          alt=""
          />
          </button>
          </div>
          
        
        <div>
        <button onClick={this.handleClick} >
        <img id={this.props.challenge.faces[1].id}
          className="inline h-33 border-4"
          src={this.props.challenge.faces[1].image_url}
          alt=""
        />
        </button>
        </div>

        <div>
          <button onClick={this.handleClick} >
        <img id={this.props.challenge.faces[2].id}
          className="inline h-33 border-4"
          src={this.props.challenge.faces[2].image_url}
          alt=""
          />
        </button>
        </div>
        </div>
        
        <div className="container mx-auto bg-yellow-300 box-content h-33 w-32 p-4 border-10">          
          <p className="text-center">{this.props.challenge.emotion_name}</p>
          </div>
        </section>
      
    
    
    );
  }
}

export default Challenge;
