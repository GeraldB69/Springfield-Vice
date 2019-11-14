import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';
import config from "../components/configSpringfieldVice.json";
import "./start.css";
import springfieldvice from "../components/img/springfieldvice.png"
import bart from "../components/img/bart2blur.png"
import homer from "../components/img/homerjumping.png"
// import triangle_icon from "../components/img/triangle_icon.png"


class Start extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstScreen: config.start.firstScreen
    })
  }

  startingGame = () => {
    this.setState({ 
		  firstScreen: false
    });
  }

  render() {
    // Modal
    let params = new URLSearchParams(this.props.location.search);
    document.getElementById("root").classList.remove("background_opacity")

    return(
      <div id="init_div">
          <audio
                ref="audio_tag"
                src="http://www.allard-jacquin.com/simpsons.mp3"
                controls
                autoPlay
                type="audio/mp3"
				      />

          <div className="start_div" style={{display: this.state.firstScreen ? "block" : "none" }}>

              <img className="sprvicelogo" src={springfieldvice} alt='logo springfield vice' />
              <div className="homerjumping">
                  <img className="homerjumpingimg" src={homer} alt='homerjumping' />
              </div>
              <div className="bart">
                  <img className="bartimg" src={bart} alt='bart' />
              </div>
              <div className="homervsbart">
                  <div className="neon">BART vs HOMER</div>
              </div>
              

              <Link to={{ pathname: "/", search: "?modal=true" }}>
              <div className="options">
                <span>options</span>
              </div>
              </Link>

              <Link to="/game">
              <div id="start" className="start_button" onClick={() => this.startingGame()}>
                <span>play</span>
              </div>
              </Link>

              

          </div>

      {params.get("modal") && (
				<Modal 
          close={() => {this.props.history.push(this.props.location.pathname);}}
					modal={this.props.location.search}
          origin={"start"}
        />
      )}
			

      </div>
    )
  }
}

export default Start;
