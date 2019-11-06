import React, { Component } from "react";
import { Link } from 'react-router-dom'
import config from "../components/configSpringfieldVice.json";
import { createPortal } from "react-dom";
import "./modal.css";

const modalStyle = {
  display: "flex",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.5)",
  color: "#FFF",
  fontSize: "20px"
};

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: config.modal.music,
      sounds: config.modal.sounds,
    };
  };

  showHeader = () => {
    if (this.props.origin === "start") {
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
    if (this.props.origin === "start") {
      this.content = 
        <div className='center'>
          <button id="close" onClick={() => this.props.close()}>X</button>
          <button>SCORES</button>
          <button onClick={() => this.toggleSounds()}>SOUNDS {!this.state.sounds ? 'ON' :  'OFF'}</button>
          <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' :  'OFF'}</button>
          <Link to="/game">
          <button>PLAY</button>
          </Link>
        </div>;
    } else {
      console.log(this.props)
      this.content = 
        <div className='center'>
          <Link to="/">
          <button>RESTART</button>
          </Link>
          <button>SCORES</button> 
          <button onClick={() => this.toggleSounds()}>SOUNDS {!this.state.sounds ? 'ON' :  'OFF'}</button>
          <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' :  'OFF'}</button>
          <Link to={{ pathname: "/game", search: "" }}>
          <button onClick={() => this.props.resume()}>RESUME</button>
          </Link>
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

  render() {
      return createPortal(
      <div style={modalStyle} className="modal" onClick={this.props.onClick}>
        {this.props.children}
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
      </div>,
      document.getElementById("modal_root"),
    );
  }
}
