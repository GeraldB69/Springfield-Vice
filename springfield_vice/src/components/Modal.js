import React, { Component } from "react";
import config from "../components/configSpringfieldVice.json";
import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: config.modal.music,
      sounds: config.modal.sounds
    };
  }

  showHeader = () => {
    if (this.props.firstScreen === true) {
      this.header =
        <div className="modal-header">
          <h3>Settings</h3>
        </div>;
    }
    else {
      this.header = 
        <div className="modal-header">
          <h3>PAUSE</h3>
        </div>;
    }
    return this.header;
  }
  showContent = () => {
    if (this.props.firstScreen === true) {
      this.content = 
        <div className='center'>
          <button>SCORES</button>
          <button onClick={() => this.toggleSounds()}>SOUNDS {!this.state.sounds ? 'ON' :  'OFF'}</button>
          <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' :  'OFF'}</button>
          <button onClick={() => this.props.toggleModal()}>PLAY</button>
        </div>;
    } else {
      this.content = 
        <div className='center'>
          <button>END GAME</button> 
          <button>SCORES</button>
          <button onClick={() => this.toggleSounds()}>SOUNDS {!this.state.sounds ? 'ON' :  'OFF'}</button>
          <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' :  'OFF'}</button>
          <button onClick={this.pauseGame}>RESUME</button>
        </div>;
    }
    return this.content;
  }

  toggleMusic = () => {
    this.setState({music: !this.state.music});
    if (this.state.music) {
      // couper la musique...
    }
    else {
      // remettre la musique...
    }
  }

  toggleSounds = () => {
    this.setState({sounds: !this.state.sounds});
    if (this.state.sounds) {
      // couper les sons...
    }
    else {
      // remettre les sons...
    }
  }

  pauseGame = () => {
		this.setState({ 
      paused: !this.state.paused
    });
    this.props.toggleModal();
	};

  render() {

    const showStyleMain = {
      transform: 'translateY(-500%)' 
    }
    const hideStyleMain = {
      transform: 'translateY(-115%)'
    }

    return (
  
      <div className="modal" style={!this.props.isModal ? showStyleMain : hideStyleMain}>
        <div className="modal-wrapper">
            {this.showHeader()}
          <div className="modal-body">
            <p>
              Do you need a break or are you giving up?
              {this.props.children}
            </p>
          </div>
              {this.showContent()}
        </div>
      </div>
    );
	}
}

export default Modal;