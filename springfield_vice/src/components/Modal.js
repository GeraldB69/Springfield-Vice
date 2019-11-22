/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import config from "../components/configSpringfieldVice.json";
import { createPortal } from "react-dom";
import "./modal.css";
import "./homer.css";
import img_looser from './img/bart_gameover.png';


const modalStyle = {
  display: "flex",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  // backgroundColor: "rgba(255,0,230,1)",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "#FFF",
  fontSize: "20px",
  justifyContent: "center",
  verticalAlign: "middle",
};
const imgStyle = {
  backgroundColor: "rgba(56,42,125,0.9)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  textShadow: "2px 2px 2px rgba(255,0,230,1)",
  
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

  callbackMusic = () => {
    this.props.toggleMusic(!this.props.getStateMusic);
  }

  showHeader() {
    const other_buttons = 
      <>
        <button onClick={this.callbackSounds}>SOUNDS {!this.props.getStateSounds ? 'ON' : 'OFF'}</button>
        <button onClick={this.callbackMusic}>MUSIC {!this.props.getStateMusic ? 'ON' : 'OFF'}</button>
      </>;
    const content = [];
    content.image = imgStyle

    // this.props.origin
    switch (this.props.origin) {
      case "start":
        {content.header = "Settings"};
        {content.quote = `"Trying is the first step towards failure."`};
        content.buttons = 
          <>
            {other_buttons}
            <Link to="/game/"><button>PLAY</button></Link>
            <button id="close" onClick={() => this.props.close()}>X</button>
          </>;
        break;
      case "go_win": // FIN DE PARTIE + GAGNANT
        content.image2 = { position: "absolute", left: "10%", top: "25%"}
        content.header = "GOOD JOB !"
        content.quote = `"Stupid risks make life worth living."`;
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
          backgroundImage: `url(${img_looser})`,
          }
        content.header = "GAME OVER"
        content.quote = `"Kid, you tried your best, and you failed miserably.`;
        content.quote2 = `The lesson is: never try."`;
        content.buttons = 
          <>
            <button>SCORES</button>
            <Link to="/"><button>RESTART</button></Link>
          </>;
        {this.props.hide(true)}
        break;
      default:
        content.header = "PAUSE";
        content.quote = `"Do you need a break or are you giving up?"`;
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



  render() {

    

    return createPortal(
      <div style={modalStyle} className="modal" onClick={this.props.onClick}>
          
        <div className="modal-wrapper" style={this.showHeader().image}>
          <div className="modal-header">
            <h3>{this.showHeader().header}</h3>
          </div>

          {this.props.origin === "go_win" ? <div style={this.showHeader().image2} className="stranglingBart"></div> : ""}
          
          <div className="modal-body">
            <p>{this.showHeader().quote}</p>
            <p>{this.showHeader().quote2}</p>
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
