/* eslint-disable no-lone-blocks */
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

  showHeader() {
    const other_buttons = 
      <>
        <button>SCORES</button>
        <button onClick={() => this.toggleSounds()}>SOUNDS {!this.state.sounds ? 'ON' :  'OFF'}</button>
        <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' :  'OFF'}</button>
      </>;
    const content = [];
    switch (this.props.origin) {
      case "start":
        {content.header = "Settings"};
        {content.quote = "Trying is the first step towards failure."};
        content.buttons = 
          <>
            {other_buttons}
            <Link to="/game"><button>PLAY</button></Link>
            <button id="close" onClick={() => this.props.close()}>X</button>
          </>;
        break;
      case "go_win": // FIN DE PARTIE + GAGNANT
        content.header = "GOOD JOB !"
        content.quote = "Stupid risks make life worth living.";
        content.buttons = 
          <>
            <button>SCORES</button>
            <Link to="/"><button>RESTART</button></Link>
          </>;
        {this.props.hide(true)}
        break;
      case "go_lost": // FIN DE PARTIE + PERDANT
        content.header = "GAME OVER"
        content.quote = "You tried your best and you failed miserably !";
        content.buttons = 
          <>
            <button>SCORES</button>
            <Link to="/"><button>RESTART</button></Link>
          </>;
        {this.props.hide(true)}
        break;
      default: 
        content.header = "PAUSE";
        content.quote = "Do you need a break or are you giving up?";
        content.buttons =
          <>
            <Link to="/"><button>RESTART</button></Link>
            {other_buttons}
            <Link to={{ pathname: "/game", search: "" }}>
              <button onClick={() => this.props.resume()}>RESUME</button>
              <button id="close" onClick={() => this.props.resume()}>X</button>
            </Link>
          </>;
        {this.props.hide()}
    }
    return content;
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
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3>{this.showHeader().header}</h3>
          </div>
          <div className="modal-body">
            <p>{this.showHeader().quote}</p>
          </div>
          <div>
            {this.showHeader().buttons}
          </div>
        </div>
      </div>,
      document.getElementById("modal_root"),
    );
  }
}
