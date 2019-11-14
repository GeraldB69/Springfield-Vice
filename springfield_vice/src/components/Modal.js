/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import config from "../components/configSpringfieldVice.json";
import { createPortal } from "react-dom";
import "./modal.css";
import img_winner from './img/homer_bart.gif';
import img_looser from './img/bart_gameover.png';

const modalStyle = {
  display: "flex",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.5)",
  color: "#FFF",
  fontSize: "20px",
};
const imgStyle = {
  backgroundColor: " rgba(0,0,0,.5)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textShadow: "2px 2px 2px rgba(0,0,0, 0.9)",
}

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      music: config.modal.music,
      sounds: config.modal.sounds,
    };
  };

  callbackSounds = () => {
    this.props.toggleSounds(!this.props.getStateSounds);
  }

  showHeader() {
    const other_buttons = 
      <>
        <button>SCORES</button>
        <button onClick={this.callbackSounds}>SOUNDS {!this.state.sounds ? 'ON' : 'OFF'}</button>
        <button onClick={() => this.toggleMusic()}>MUSIC {!this.state.music ? 'ON' : 'OFF'}</button>
      </>;
    const content = [];
    content.image = imgStyle

    switch (this.props.origin) {
      case "start":
        {content.header = "Settings"};
        {content.quote = "Trying is the first step towards failure."};
        content.buttons = 
          <>
            {other_buttons}
            <Link to="/game/"><button>PLAY</button></Link>
            <button id="close" onClick={() => this.props.close()}>X</button>
          </>;
        break;
      case "go_win": // FIN DE PARTIE + GAGNANT
        content.image = {...content.image, backgroundImage: `url(${img_winner})`
        }
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
        content.image = {...content.image,
          backgroundPosition: "right 10% center",
          backgroundRepeat: "no-repeat", 
          backgroundSize: "30%",
          backgroundImage: `url(${img_looser})`
          }
        content.header = "GAME OVER"
        content.quote = "Kids, you tried your best, and you failed miserably. The lesson is: never try.";
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


  render() {
    return createPortal(
      <div style={modalStyle} className="modal" onClick={this.props.onClick}>
        <div className="modal-wrapper" style={this.showHeader().image}>
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
