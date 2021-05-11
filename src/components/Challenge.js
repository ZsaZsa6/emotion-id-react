import React, { Component } from "react";

class Challenge extends Component {
  render() {
    return (
      <div className="bg-gray-200">
      <div className="grid-cols-3 col-span-3 grid-rows-1 flex justify-center mx-auto bg-gray-200 ">
        
        <img
          className="inline h-28 border-4"
          src={this.props.challenge.faces[0].image_url}
          alt={this.props.challenge.faces[0].face_id}
          
        />
        <img
          className="inline h-28 border-4"
          src={this.props.challenge.faces[1].image_url}
          alt=""
        />
        <img
          className="inline h-28 border-4 "
          src={this.props.challenge.faces[2].image_url}
          alt=""
        />
        </div>
        
        <div className="container mx-auto bg-yellow-300 box-content h-32 w-32 p-4 border-10">          
          <p className="text-center">{this.props.challenge.emotion_name}</p>
          </div>
          </div>
      
    
    
    );
  }
}

export default Challenge;
