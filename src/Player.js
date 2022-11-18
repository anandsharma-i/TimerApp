import React, { Component } from "react";

// Import your audio file
import song from "./song.mp3";

class Player extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,    
  };  

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  
  

  render() {
    return (
      <div>
        {/* Show state of song on website */}
        <p>
          {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
        </p>
        
        {/* Button to call our main function */}
        {!this.state.isPlaying?this.playPause():null}
        {/* <button onClick={this.playPause} >
          Play | Pause
        </button> */}
      </div>
    );
  }
}

export default Player;