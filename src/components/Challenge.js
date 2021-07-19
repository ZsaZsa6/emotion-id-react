import React, { Component } from "react";

class Challenge extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatchCreateAnswer({
        challenge_id: this.props.challenge.id,
        face_id: e.target.id
      },
      this.game_username
     
      );
  };

  render() {
    return (
      <section className="font-bold mx-15 text-center text-green-dark py-2 px-4">
        <div className="container flex justify-center mx-auto bg-blue-200 p-8 md:p-0 items-center">
          <figure className="box-center mx-auto">
            Pick the picture that matches the emotion:

          </figure>
        </div>

        <div className="grid-cols-3 col-span-3 grid-rows-1 flex justify-center mx-auto">
          <div>
            <button onClick={this.handleClick}>
              <img
                id={this.props.challenge.faces[0].id}
                className="object-cover sm:h-56 w-full"
                src={this.props.challenge.faces[0].image_url}
                alt=""
              />
            </button>
          </div>

          <div>
            <button onClick={this.handleClick}>
              <img
                id={this.props.challenge.faces[1].id}
                className="object-cover sm:h-56 w-full"
                src={this.props.challenge.faces[1].image_url}
                alt=""
              />
            </button>
          </div>

          <div>
            <button onClick={this.handleClick}>
              <img
                id={this.props.challenge.faces[2].id}
                className="object-cover sm:h-56 w-full"
                src={this.props.challenge.faces[2].image_url}
                alt=""
              />
            </button>
          </div>
        </div>
        <figure className="bg-red-300 box font-bold text-2xl ">
          {this.props.challenge.emotion_name}
        </figure>
      </section>
    );
  }
}

export default Challenge;
