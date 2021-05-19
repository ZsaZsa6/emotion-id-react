import React, { Component } from "react";



class Challenge extends Component {
  handleClick = (e) => {
    e.preventDefault();
   this.props.dispatchCreateAnswer({challenge_id: this.props.challenge.id, face_id: e.target.id}, this.game_username)
  }
  
    
  
  render() {
    
    return (
      <section className="bg-gray-200">
      <div>   
           <figure className="container flex box-center mx-auto bg-blue-200 rounded-xl p-8 md:p-0 text-center">   
          <p className="container font-bold mx-15 text-center text-green-dark py-2 px-4">Pick the picture that matches the emotion:
           <br></br><text className="text-center font-bold text xl-bold">{this.props.challenge.emotion_name}</text></p>
          </figure>
          </div>
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
        {/* <section className="container mx-auto bg-yellow-300 box-content h-33 w-32 p-4 border-10">  */}
          
        
          
          {/* </section> */}
        </section>
      
    
    
    );
  }
}

export default Challenge;
