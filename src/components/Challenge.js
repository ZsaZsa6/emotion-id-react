import React, { Component } from "react";

class Challenge extends Component {
  render() {
    return (
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={this.props.challenge.faces[0].image_url}
          alt=""
        />
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={this.props.challenge.faces[1].image_url}
          alt=""
        />
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={this.props.challenge.faces[2].image_url}
          alt=""
        />

        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">
              {this.props.challenge.emotion_name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
